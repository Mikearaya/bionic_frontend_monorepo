import { Component, OnInit } from '@angular/core';
import {
  PartnersPaymentApiService,
  PartnerPaymentView,
  PartnerPayment,
  UnpaidPartnerRent
} from '@bionic/apis/rent/partners-payment-api';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {
  VehicleOwnerViewModel,
  VehicleOwnersApiService
} from '@bionic/apis/rent/vehicle-owners-api';

@Component({
  selector: 'bionic-partners-payment-form',
  templateUrl: './partners-payment-form.component.html',
  styleUrls: ['./partners-payment-form.component.css']
})
export class PartnersPaymentFormComponent implements OnInit {
  partnerPaymentForm: FormGroup;
  isUpdate: boolean;
  partnersField: { text: string; value: string };
  unpaidRents: UnpaidPartnerRent[] = [];
  partners: VehicleOwnerViewModel[] = [];

  constructor(
    private partnerPaymentApi: PartnersPaymentApiService,
    private formBuilder: FormBuilder,
    private partnersApi: VehicleOwnersApiService
  ) {
    this.partnersField = { text: 'PartnerName', value: 'Id' };
    this.createForm();
  }

  ngOnInit() {
    this.partnersApi
      .getVehicleOwnersList({})
      .subscribe((data: any) => (this.partners = data.Items));
  }

  private createForm(): void {
    this.partnerPaymentForm = this.formBuilder.group({
      PartnerId: ['', Validators.required],
      Date: ['', Validators.required],
      Rents: this.formBuilder.array([])
    });
  }

  partnerChanged(event: any) {
    this.partnerPaymentApi
      .getUnpaidPartnerRents(event.itemData['Id'])
      .subscribe((data: UnpaidPartnerRent[]) =>
        this.initializeUnpaidRents(data)
      );
  }

  private initializeUnpaidRents(rents: UnpaidPartnerRent[]): void {
    this.unpaidRents = rents;
    this.Rents.controls = [];
    rents.forEach(element => {
      this.Rents.push(
        this.formBuilder.group({
          RentId: [element.RentId, Validators.required],
          PaymentAmount: [element.RemainingAmount]
        })
      );
    });
  }

  get Rents(): FormArray {
    return this.partnerPaymentForm.get('Rents') as FormArray;
  }
  get PartnerId(): FormControl {
    return this.partnerPaymentForm.get('PartnerId') as FormControl;
  }

  get Date(): FormControl {
    return this.partnerPaymentForm.get('Date') as FormControl;
  }

  onSubmit(): void {
    const paymentForm = this.prepareData(this.partnerPaymentForm);

    if (paymentForm) {
      this.partnerPaymentApi
        .addNewPartnerPayment(paymentForm)
        .subscribe(
          (data: PartnerPaymentView) =>
            alert('Partner payment added successfuly'),
          (error: HttpErrorResponse) =>
            alert(
              'Error while attempting to update partner payment, try agin later '
            )
        );
    }
  }

  private prepareData(form: FormGroup): PartnerPayment | null {
    if (form.valid) {
      const partnerPayment: PartnerPayment = {
        PartnerId: this.PartnerId.value,
        Date: this.Date.value,
        Rents: []
      };

      this.Rents.controls.forEach(element => {
        partnerPayment.Rents.push({
          RentId: element.get('RentId').value,
          Amount: element.get('PaymentAmount').value
        });
      });
      return partnerPayment;
    } else {
      return null;
    }
  }
}
