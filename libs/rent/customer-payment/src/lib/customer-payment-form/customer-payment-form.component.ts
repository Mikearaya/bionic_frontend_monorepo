import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  CustomersPaymentApiService,
  CustomerPaymentView,
  CustomerPayment,
  UnpaidCustomerRent
} from '@bionic/apis/rent/customers-payment-api';
import { HttpErrorResponse } from '@angular/common/http';
import {
  CustomersApiService,
  CustomerViewModel
} from '@bionic/apis/rent/customer-api';

@Component({
  selector: 'bionic-customer-payment-form',
  templateUrl: './customer-payment-form.component.html',
  styleUrls: ['./customer-payment-form.component.css']
})
export class CustomerPaymentFormComponent implements OnInit {
  customerPaymentForm: FormGroup;
  isUpdate: boolean;
  private paymentId: number;
  customers: CustomerViewModel[] = [];
  unpaidRents: UnpaidCustomerRent[] = [];
  customerFields: { text: string; value: string };
  constructor(
    private customerPaymentApi: CustomersPaymentApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private customerApi: CustomersApiService
  ) {
    this.createForm();
    this.customerFields = { text: 'CustomerName', value: 'Id' };
  }

  ngOnInit() {
    this.customerApi
      .getCustomersList({})
      .subscribe((data: any) => (this.customers = data.Items));
  }

  private createForm(): void {
    this.customerPaymentForm = this.formBuilder.group({
      CustomerId: ['', Validators.required],
      Date: ['', Validators.required],
      Rents: this.formBuilder.array([])
    });
  }

  customerChanged(event: any) {
    this.customerPaymentApi
      .getUnpaidCustomerRent(event.itemData['Id'])
      .subscribe((data: UnpaidCustomerRent[]) =>
        this.initializeUnpaidRents(data)
      );
  }

  private initializeUnpaidRents(rents: UnpaidCustomerRent[]): void {
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

  get CustomerId(): FormControl {
    return this.customerPaymentForm.get('CustomerId') as FormControl;
  }

  get Date(): FormControl {
    return this.customerPaymentForm.get('Date') as FormControl;
  }

  get Rents(): FormArray {
    return this.customerPaymentForm.get('Rents') as FormArray;
  }

  onSubmit(): void {
    const paymentForm = this.prepareData(this.customerPaymentForm);

    if (paymentForm) {
      this.customerPaymentApi
        .addNewCustomerPayment(paymentForm)
        .subscribe(
          (data: CustomerPaymentView) =>
            alert('Customer payment saved successfuly'),
          (error: HttpErrorResponse) =>
            alert(
              'error while attempting to save customer payment, try again later'
            )
        );
    }
  }

  private prepareData(form: FormGroup): CustomerPayment | null {
    if (form.valid) {
      const customerPayment: CustomerPayment = {
        CustomerId: this.CustomerId.value,
        Date: this.Date.value,
        Rents: []
      };

      this.Rents.controls.forEach(element => {
        customerPayment.Rents.push({
          RentId: element.get('RentId').value,
          Amount: element.get('PaymentAmount').value
        });
      });

      return customerPayment;
    } else {
      return null;
    }
  }
}
