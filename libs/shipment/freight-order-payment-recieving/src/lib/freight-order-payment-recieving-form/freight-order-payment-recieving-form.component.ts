import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  FreightOrderPaymentRecievingApiService,
  FreightOrderPaymentRecievingView,
  FreightOrderPaymentRecieving
} from '@bionic/apis/shipment/freight-order-payment-recieving-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-freight-order-payment-recieving-form',
  templateUrl: './freight-order-payment-recieving-form.component.html',
  styleUrls: ['./freight-order-payment-recieving-form.component.css']
})
export class FreightOrderPaymentRecievingFormComponent implements OnInit {
  paymentRecievingForm: FormGroup;
  isUpdate: boolean;
  private paymentRecievingId: number;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private paymentRecievingApi: FreightOrderPaymentRecievingApiService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.paymentRecievingId = +this.activatedRoute.snapshot.paramMap.get(
      'paymentRecievingId'
    );

    if (this.paymentRecievingId) {
      this.isUpdate = true;
      this.paymentRecievingApi
        .getPaymentRecievingById(this.paymentRecievingId)
        .subscribe((data: FreightOrderPaymentRecievingView) =>
          this.initializeForm(data)
        );
    }
  }

  private createForm(): void {
    this.paymentRecievingForm = this.formBuilder.group({
      Id: ['', Validators.required],
      RecievedAmount: ['', Validators.required],
      CheckNo: ['', Validators.required],
      RecievedDate: ['', Validators.required],
      DepositedTo: ['', Validators.required]
    });
  }

  private initializeForm(data: FreightOrderPaymentRecievingView): void {
    this.paymentRecievingForm.patchValue(data);
  }

  onSubmit(): void {
    const formData = this.prepareFormData(this.paymentRecievingForm);

    if (this.isUpdate && formData) {
      this.paymentRecievingApi
        .updatePaymentRecieving(formData)
        .subscribe(
          () => alert('Payment Recieving Updated Successfuly'),
          (error: HttpErrorResponse) =>
            alert('Unable to Update payment recieving')
        );
    } else {
      this.paymentRecievingApi.createPaymentRecieving(formData).subscribe(
        (data: FreightOrderPaymentRecievingView) => {
          this.paymentRecievingForm.reset();
          alert('Payment recieving form Saved successfuly');
        },
        (error: HttpErrorResponse) =>
          alert('error saving payment recieving try again later')
      );
    }
  }

  private prepareFormData(
    form: FormGroup
  ): FreightOrderPaymentRecieving | null {
    if (form.valid) {
      const recieving: FreightOrderPaymentRecieving = this.paymentRecievingForm
        .value;
      if (this.isUpdate) {
        recieving.Id = this.paymentRecievingId;
      }
      return recieving;
    } else {
      return null;
    }
  }
}
