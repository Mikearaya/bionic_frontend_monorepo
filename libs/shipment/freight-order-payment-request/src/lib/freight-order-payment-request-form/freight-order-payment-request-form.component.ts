import { Component, OnInit } from '@angular/core';
import {
  FreightOrderPaymentRequestApiService,
  FreightOrderPaymentRequestView,
  FreightOrderPaymentRequest
} from '@bionic/apis/shipment/freight-order-payment-request-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-freight-order-payment-request-form',
  templateUrl: './freight-order-payment-request-form.component.html',
  styleUrls: ['./freight-order-payment-request-form.component.css']
})
export class FreightOrderPaymentRequestFormComponent implements OnInit {
  paymentRequestForm: FormGroup;
  isUpdate: boolean;
  private paymentRequestId: number;

  constructor(
    private freightOrderApi: FreightOrderPaymentRequestApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.paymentRequestId = +this.activatedRoute.snapshot.paramMap.get(
      'paymentRequestId'
    );

    if (this.paymentRequestId) {
      this.isUpdate = true;
      this.freightOrderApi
        .getPaymentRequestById(this.paymentRequestId)
        .subscribe((data: FreightOrderPaymentRequestView) =>
          this.initializeForm(data)
        );
    }
  }

  private createForm(): void {
    this.paymentRequestForm = this.formBuilder.group({
      FreightOrderId: ['', Validators.required],
      RequestedDate: ['', Validators.required],
      ScheduledDate: ['', Validators.required]
    });
  }

  private initializeForm(data: FreightOrderPaymentRequestView): void {
    this.paymentRequestForm.patchValue(data);
  }

  onSubmit(): void {
    const formdata = this.prepareFormData(this.paymentRequestForm);

    if (this.isUpdate && formdata) {
      this.freightOrderApi
        .updatePaymentRequest(formdata)
        .subscribe(
          () => alert('Payment Request Updated Successfully'),
          (error: HttpErrorResponse) =>
            alert('Unable to Update Payment Request, Try again later')
        );
    } else if (formdata) {
      this.freightOrderApi.createPaymentRequest(formdata).subscribe(
        (data: FreightOrderPaymentRequestView) => {
          this.paymentRequestForm.reset();
          alert('Freight Order Created Successfuly');
        },
        (error: HttpErrorResponse) =>
          alert('Unable to save payment Request Try again later')
      );
    }
  }

  private prepareFormData(form: FormGroup): FreightOrderPaymentRequest | null {
    if (form.valid) {
      const paymentRequest: FreightOrderPaymentRequest = this.paymentRequestForm
        .value;
      if (this.paymentRequestId) {
        paymentRequest.Id = this.paymentRequestId;
      }

      return paymentRequest;
    } else {
      return null;
    }
  }
}
