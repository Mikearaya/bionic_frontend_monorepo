import { Component, OnInit } from '@angular/core';
import {
  PartnersPaymentApiService,
  PartnerPaymentDetail,
  PartnerPaymentView,
  PartnerPayment
} from '@bionic/apis/rent/partners-payment-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-partners-payment-form',
  templateUrl: './partners-payment-form.component.html',
  styleUrls: ['./partners-payment-form.component.css']
})
export class PartnersPaymentFormComponent implements OnInit {
  partnerPaymentForm: FormGroup;
  isUpdate: boolean;
  private paymentId: number;

  constructor(
    private partnerPaymentApi: PartnersPaymentApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paymentId = +this.activatedRoute.snapshot.paramMap.get('paymentId');

    if (this.paymentId) {
      this.isUpdate = true;
      this.partnerPaymentApi
        .getPartnerPaymentById(this.paymentId)
        .subscribe((data: PartnerPaymentView) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.partnerPaymentForm = this.formBuilder.group({
      PartnerId: ['', Validators.required],
      Date: ['', Validators.required],
      Rents: this.formBuilder.array([])
    });
  }

  private initializeForm(payment: PartnerPaymentView): void {
    this.partnerPaymentForm = this.formBuilder.group({
      PartnerId: ['', Validators.required],
      Date: ['', Validators.required],
      Rents: this.formBuilder.array([])
    });
  }

  private prepareData(form: FormGroup): PartnerPayment | null {
    if (form.valid) {
    } else {
      return null;
    }
  }

  onSubmit(): void {
    const paymentForm = this.prepareData(this.partnerPaymentForm);

    if (this.isUpdate && paymentForm) {
      this.partnerPaymentApi
        .updatePartnerPayment(paymentForm)
        .subscribe(
          () => alert('Partner payment updated successfuly'),
          (error: HttpErrorResponse) =>
            alert('Error while updating partner payment, try again later')
        );
    } else if (paymentForm) {
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
}
