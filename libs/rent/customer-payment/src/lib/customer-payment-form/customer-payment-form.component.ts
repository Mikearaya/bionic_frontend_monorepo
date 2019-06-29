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
  CustomerPaymentDetail,
  CustomerPayment
} from '@bionic/apis/rent/customers-payment-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-customer-payment-form',
  templateUrl: './customer-payment-form.component.html',
  styleUrls: ['./customer-payment-form.component.css']
})
export class CustomerPaymentFormComponent implements OnInit {
  customerPaymentForm: FormGroup;
  isUpdate: boolean;
  private paymentId: number;

  constructor(
    private customerPaymentApi: CustomersPaymentApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.paymentId = +this.activatedRoute.snapshot.paramMap.get('paymentId');

    if (this.paymentId) {
      this.isUpdate = true;
      this.customerPaymentApi
        .getCustomerPaymentById(this.paymentId)
        .subscribe((data: CustomerPaymentView) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.customerPaymentForm = this.formBuilder.group({
      CustomerId: ['', Validators.required],
      Date: ['', Validators.required],
      Rents: this.formBuilder.array([])
    });
  }

  private initializeRentEntry(rents: CustomerPaymentDetail): FormGroup {
    return this.formBuilder.group({
      Id: [rents.Id, Validators.required],
      RentId: [rents.RentId, Validators.required],
      Amount: [rents.Amount, Validators.required]
    });
  }

  private getCustomerPayments() {}

  private createRentEntry(): FormGroup {
    return this.formBuilder.group({
      RentId: ['', Validators.required],
      Amount: ['', Validators.required]
    });
  }

  private initializeForm(payment: CustomerPaymentView): void {
    this.customerPaymentForm = this.formBuilder.group({
      Id: ['', Validators.required],
      CustomerId: ['', Validators.required],
      Date: ['', Validators.required],
      Rents: this.formBuilder.array([])
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

    if (this.isUpdate && paymentForm) {
      this.customerPaymentApi
        .updateCustomerPayment(paymentForm)
        .subscribe(
          () => alert('Customer Payment updated successfuly'),
          (error: HttpErrorResponse) =>
            alert('Failed while updating customer payment try again later')
        );
    } else if (paymentForm) {
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

  deleteCustomerPayment(rent: CustomerPaymentDetail) {}

  private prepareData(form: FormGroup): CustomerPayment | null {
    if (form.valid) {
    } else {
      return null;
    }
  }
}
