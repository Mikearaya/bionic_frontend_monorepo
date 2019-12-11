import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CustomerInvoiceApiService,
  CustomerInvoice,
  CustomerInvoiceDetailItem
} from '@bionic/apis/crm/customer-invoice-api';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';
import { NotificationComponent } from '@bionic/components/notification';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import {
  CustomerOrderApiService,
  CustomerOrderDetailView
} from '@bionic/apis/crm/customer-order-api';

@Component({
  selector: 'bionic-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  @ViewChild('notification') notification: NotificationComponent;
  public invoiceForm: FormGroup;
  public discount: number;
  public totalTax: number;
  public totalBeforeTax: number;
  public totalAfterTax: number;
  public totalQuantity: number;
  public taxAmount: number;
  public invoiceTypes = [
    'Quotation',
    'Pro-forma invoice',
    'Invoice',
    'Credit-invoice',
    'Order confirmation'
  ];
  public invoiceStatus = ['Paid', 'Not Paid'];
  public customersList: Object[];
  public submitButtonText = 'Save';

  private orderId: number;
  private invoiceId: number;
  public isUpdate: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private invoiceApi: CustomerInvoiceApiService,
    private activatedRoute: ActivatedRoute,
    private customerOrderApi: CustomerOrderApiService,
    private location: Location
  ) {
    this.isUpdate = false;

    this.createForm();
  }

  ngOnInit() {
    this.invoiceId = +this.activatedRoute.snapshot.paramMap.get('invoiceId');

    if (this.invoiceId) {
      this.isUpdate = true;
      this.invoiceApi
        .getCustomerById(this.invoiceId)
        .subscribe(e => this.initializeForm(e));
    }
  }

  get items(): FormArray {
    return this.invoiceForm.get('InvoiceDetail') as FormArray;
  }
  invoiceItems(): FormGroup {
    return this.formBuilder.group({
      ItemId: ['', Validators.required],
      Quantity: [0, Validators.required],
      UnitPrice: [0, Validators.required],
      Discount: [0],
      Note: ['']
    });
  }

  createForm() {
    this.invoiceForm = this.formBuilder.group({
      PurchaseOrderId: ['', Validators.required],
      InvoiceType: ['', Validators.required],
      DueDate: ['', Validators.required],
      PaymentMethod: ['CASH', Validators.required],
      Note: [''],
      TotalDiscount: [0],
      Tax: [0],
      InvoiceDetail: this.formBuilder.array([this.invoiceItems()])
    });
    this.tax.valueChanges.subscribe(_ => this.calculatePrice([]));
    this.totaldiscount.valueChanges.subscribe(_ => this.calculatePrice([]));
  }
  itemId(i: number): FormControl {
    return this.items.at(i).get('ItemId') as FormControl;
  }
  quantity(i: number): FormControl {
    return this.items.at(i).get('Quantity') as FormControl;
  }

  unitPrice(i: number): FormControl {
    return this.items.at(i).get('UnitPrice') as FormControl;
  }

  discounts(i: number): FormControl {
    return this.items.at(i).get('Discount') as FormControl;
  }

  get totaldiscount(): FormControl {
    return this.invoiceForm.get('TotalDiscount') as FormControl;
  }

  get customerOrderId(): FormControl {
    return this.invoiceForm.get('PurchaseOrderId') as FormControl;
  }

  get invoiceType(): FormControl {
    return this.invoiceForm.get('InvoiceType') as FormControl;
  }

  get tax(): FormControl {
    return this.invoiceForm.get('Tax') as FormControl;
  }

  get status(): FormControl {
    return this.invoiceForm.get('Status') as FormControl;
  }

  get dueDate(): FormControl {
    return this.invoiceForm.get('DueDate') as FormControl;
  }

  get paymentMethod(): FormControl {
    return this.invoiceForm.get('PaymentMethod') as FormControl;
  }

  private initializeForm(data: CustomerInvoice) {
    this.invoiceForm.patchValue(data);

    this.items.valueChanges.subscribe((value: any[]) => {
      this.calculatePrice(value);
    });

    data.InvoiceDetail.forEach(element => {
      this.items.push(this.initializeInvoiceDetails(element));
    });

    this.tax.valueChanges.subscribe(_ => this.calculatePrice([]));
    this.totaldiscount.valueChanges.subscribe(_ => this.calculatePrice([]));
  }

  private initializeInvoiceDetails(data: CustomerInvoiceDetailItem): FormGroup {
    return this.formBuilder.group({
      Id: [data.Id],
      SalesOrderId: [data.Id, Validators.required],
      ItemId: [data.ItemId, Validators.required],
      Quantity: [data.Quantity, [Validators.required]],
      UnitPrice: [data.UnitPrice, Validators.required],
      Discount: [data.Discount],
      Note: [data.Note]
    });
  }

  onSubmit() {
    const data = this.invoiceForm.value as CustomerInvoice;
    this.invoiceApi.addCustomerInvoices(data).subscribe(
      (result: CustomerInvoice) => {
        this.notification.showMessage('Invoice Created');
        this.initializeForm(data);
      },
      (error: HttpErrorResponse) => {
        this.notification.showMessage(
          'Error occured while creating invoice, try again later',
          'error'
        );
      }
    );
  }

  addItem() {
    this.items.push(this.invoiceItems());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  private calculatePrice(value: any[] = []): void {
    this.discount = 0;
    this.totalQuantity = 0;
    this.totalBeforeTax = 0;
    this.totalAfterTax = 0;
    this.taxAmount = 0;
    this.items.controls.forEach(element => {
      this.discount += element.value.Discount;
      this.totalQuantity += element.value.Quantity;
      this.totalBeforeTax +=
        element.value.Quantity * element.value.UnitPrice -
        element.value.Quantity *
          element.value.UnitPrice *
          (element.value.Discount / 100);
    });

    this.totalBeforeTax =
      this.totalBeforeTax -
      this.totalBeforeTax * ((this.totaldiscount.value as number) / 100);
    this.totalAfterTax =
      this.totalBeforeTax - this.totalBeforeTax * (this.tax.value / 100);
  }

  customerOrderChange($event): void {
    this.customerOrderApi
      .getCustomerOrderById($event)
      .subscribe(e => this.resetToCustomerOrderItems(e));
  }

  private resetToCustomerOrderItems(data: CustomerOrderDetailView): void {
    this.items.controls = [];
    this.items.valueChanges.subscribe((value: any[]) => {
      this.calculatePrice(value);
    });

    data.CustomerOrderItem.forEach(element => {
      this.items.push(
        this.formBuilder.group({
          SalesOrderId: [element.Id, Validators.required],
          ItemId: [element.ItemId, Validators.required],
          Quantity: [element.Quantity, [Validators.required]],
          UnitPrice: [element.PricePerItem, Validators.required],
          Discount: [0],
          Note: ['']
        })
      );
    });
    this.tax.valueChanges.subscribe(_ => this.calculatePrice([]));
    this.totaldiscount.valueChanges.subscribe(_ => this.calculatePrice([]));
  }
}
