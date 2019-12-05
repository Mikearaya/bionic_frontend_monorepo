import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  PurchaseOrderPaymentsApiService,
  PurchaseOrderPaymentView,
  PurchaseOrderPayment
} from '@bionic/apis/procurment/purchase-order-payment-api';
import { NotificationComponent } from '@bionic/components/notification';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-purchase-order-payment-form',
  templateUrl: './purchase-order-payment-form.component.html',
  styleUrls: ['./purchase-order-payment-form.component.css']
})
export class PurchaseOrderPaymentFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;

  paymentForm: FormGroup;
  private paymentId: number;
  isUpdate: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private purchaseOrderPaymentApi: PurchaseOrderPaymentsApiService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.paymentId = +this.activatedRoute.snapshot.paramMap.get('paymentId');

    if (this.paymentId) {
      this.isUpdate = true;
      this.purchaseOrderPaymentApi
        .getPurchaseOrderPaymentById(this.paymentId)
        .subscribe((data: PurchaseOrderPaymentView) =>
          this.initializeForm(data)
        );
    }
  }

  private createForm(): void {
    this.paymentForm = this.formBuilder.group({
      Amount: ['', Validators.required],
      PurchaseOrderId: ['', Validators.required],
      CheckNo: [''],
      Date: ['', Validators.required],
      Note: ['']
    });
  }

  private initializeForm(payment: PurchaseOrderPaymentView): void {
    this.paymentForm.patchValue(payment);
  }

  getControl(control: string): FormControl {
    return this.paymentForm.get(control) as FormControl;
  }

  onPurchaseOrderSelected(event: any): void {
    this.getControl('Amount').setValue(event.RemainingAmount);
  }

  onSubmit(): void {
    const formData = this.prepareFormData(this.paymentForm);

    if (this.isUpdate && formData) {
      this.purchaseOrderPaymentApi
        .updatePurchaseOrderPayment(formData)
        .subscribe(
          () => this.notification.showMessage('Payment Updated Successfuly'),
          (error: HttpErrorResponse) =>
            this.notification.showMessage(
              'Error while updating payment try again later',
              'error'
            )
        );
    } else if (formData) {
      this.purchaseOrderPaymentApi
        .addNewPurchaseOrderPayment(formData)
        .subscribe(
          () => this.notification.showMessage('Payment Added Successfuly'),
          (error: HttpErrorResponse) =>
            this.notification.showMessage(
              'Error while saving payment try again later',
              'error'
            )
        );
    }
  }
  private prepareFormData(form: FormGroup): PurchaseOrderPayment | null {
    if (form.valid) {
      const payment: PurchaseOrderPayment = this.paymentForm.value;

      if (this.paymentId) {
        payment.Id = this.paymentId;
      }
      return payment;
    } else {
      return null;
    }
  }
}
