import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {
  CustomerInvoicePaymentApiService,
  InvoicePaymentListView,
  InvoicePaymentModel,
  InvoicePaymentStatusView
} from '@bionic/apis/crm/customer-invoice-payment-api';
import { NotificationComponent } from '@bionic/components/notification';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-customer-invoice-payment-form',
  templateUrl: './customer-invoice-payment-form.component.html',
  styleUrls: ['./customer-invoice-payment-form.component.css']
})
export class CustomerInvoicePaymentFormComponent implements OnInit {
  public invoicePaymentForm: FormGroup;
  public isUpdate: boolean;
  private paymentId: number;

  @ViewChild('notification')
  public notification: NotificationComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private invoicePaymentApi: CustomerInvoicePaymentApiService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.paymentId = +this.activatedRoute.snapshot.paramMap.get('paymentId');

    if (this.paymentId) {
      this.isUpdate = true;
      this.invoicePaymentApi
        .getInvoicePaymentById(this.paymentId)
        .subscribe((data: InvoicePaymentListView) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.invoicePaymentForm = this.formBuilder.group({
      Id: [0],
      InvoiceNo: ['', Validators.required],
      Amount: [0, Validators.required],
      CheckNo: ['', Validators.required],
      Date: ['', Validators.required],
      Note: ['']
    });
  }

  get invoiceNo(): FormControl {
    return this.invoicePaymentForm.get('InvoiceNo') as FormControl;
  }
  get amount(): FormControl {
    return this.invoicePaymentForm.get('Amount') as FormControl;
  }

  get checkNo(): FormControl {
    return this.invoicePaymentForm.get('CheckNo') as FormControl;
  }

  get date(): FormControl {
    return this.invoicePaymentForm.get('Date') as FormControl;
  }

  get note(): FormControl {
    return this.invoicePaymentForm.get('Note') as FormControl;
  }

  private initializeForm(data: InvoicePaymentListView): void {
    this.isUpdate = true;
    this.paymentId = data.Id;
    this.invoicePaymentForm.patchValue(data);
  }

  onSubmit(): void {
    const formData = this.prepareFormData();

    if (!this.isUpdate) {
      this.invoicePaymentApi.createInvoicePayment(formData).subscribe(
        (data: InvoicePaymentListView) => {
          this.initializeForm(data);
          this.notification.showMessage('Invoice payment added successfuly');
        },
        (error: HttpErrorResponse) =>
          this.notification.showMessage(
            'Error creating invoice payment, try again later',
            'error'
          )
      );
    } else {
      this.invoicePaymentApi
        .updateInvoicePayment(formData.Id, formData)
        .subscribe(
          () =>
            this.notification.showMessage(
              'invoice payment updated successfuly'
            ),
          (error: HttpErrorResponse) =>
            this.notification.showMessage(
              'Error while updating invoice payment, try again later',
              'error'
            )
        );
    }
  }

  private prepareFormData(): InvoicePaymentModel {
    const formData = this.invoicePaymentForm.value as InvoicePaymentModel;
    return formData;
  }

  private initializeRemaining(status: InvoicePaymentStatusView) {
    this.amount.setValue(status.RemainingAmount);
  }

  onInvoiceChanged($event): void {
    this.invoicePaymentApi
      .getInvoicePaymentStatus($event)
      .subscribe((data: InvoicePaymentStatusView) =>
        this.initializeRemaining(data)
      );
  }
}
