import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationComponent } from '@bionic/components/notification';
import {
  PurchaseOrderApiService,
  PurchaseOrderDetailView,
  PurchaseOrderItemView,
  PurchaseOrder
} from '@bionic/apis/procurment/purchase-order-api';

@Component({
  selector: 'bionic-purchase-order-form',
  templateUrl: './purchase-order-form.component.html',
  styleUrls: ['./purchase-order-form.component.css']
})
export class PurchaseOrderFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;
  vendorsList;
  public purchaseOrderForm: FormGroup;
  public title: string;
  public isUpdate: Boolean;
  public purchaseOrderStatus = [
    'New',
    'RFQ',
    'Ordered',
    'Shipped',
    'Recieved',
    'Canceled'
  ];

  public itemFields: { text: string; value: string };

  public vendorFields: { text: string; value: string };

  private purchaseOrderId: number;
  totalBeforeDiscount: number;
  total: number;
  totalAfterTax: number;
  totalAfterAdditionalFee: number;
  itemsList;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private purchaseOrderApi: PurchaseOrderApiService
  ) {
    this.createForm();
    this.itemFields = { text: 'name', value: 'id' };
    this.vendorFields = { text: 'name', value: 'id' };
  }

  ngOnInit() {
    this.purchaseOrderId = +this.activatedRoute.snapshot.paramMap.get(
      'purchaseOrderId'
    );
    this.title = this.activatedRoute.snapshot.data['title'];

    if (this.purchaseOrderId) {
      this.isUpdate = true;
      this.purchaseOrderApi
        .getPurchaseOrderById(this.purchaseOrderId)
        .subscribe((data: PurchaseOrderDetailView) =>
          this.initializeForm(data)
        );
    }
  }

  vendorChanged(event: any) {
    /* this.itemApi
      .getVendorItems(event.value)
      .subscribe((data: any[]) => (this.itemsList = data)); */
  }

  private createForm(): void {
    this.purchaseOrderForm = this.formBuilder.group({
      vendorId: ['', Validators.required],
      status: ['', Validators.required],
      expectedDate: ['', Validators.required],
      tax: [''],
      discount: [''],
      additionalFees: [''],
      note: [''],
      orderId: [''],
      orderDate: [''],
      invoiceId: [''],
      invoiceDate: [''],
      paymentDate: [''],
      shippedOn: [''],
      arrivalDate: [''],
      purchaseOrderItems: this.formBuilder.array([
        this.createPurchaseOrderItems()
      ])
    });

    this.purchaseOrderItems.valueChanges.subscribe(e =>
      this.calculatePrices(e)
    );
    this.discount.valueChanges.subscribe(() =>
      this.purchaseOrderItems.updateValueAndValidity()
    );
    this.tax.valueChanges.subscribe(() =>
      this.purchaseOrderItems.updateValueAndValidity()
    );
  }

  calculatePrices(e: any[]) {
    this.totalBeforeDiscount = 0;
    this.totalAfterTax = 0;
    this.totalAfterAdditionalFee = 0;
    let subTotals = 0;
    e.forEach(item => {
      subTotals = subTotals + item.quantity * item.unitPrice;
    });
    this.totalBeforeDiscount =
      subTotals - subTotals * (this.discount.value / 100);
    this.totalAfterTax =
      this.totalBeforeDiscount -
      this.totalBeforeDiscount * (this.tax.value / 100);
    this.totalAfterAdditionalFee =
      this.totalAfterTax + this.additionalFees.value;
  }
  private initializeForm(data: PurchaseOrderDetailView): void {
    const vendor = { value: data.vendorId };

    this.vendorChanged(vendor);

    this.purchaseOrderForm.patchValue(data);
    /*
    this.purchaseOrderItems.valueChanges.subscribe(e =>
      this.calculatePrices(e)
    );

    this.discount.valueChanges.subscribe(() =>
      this.purchaseOrderItems.updateValueAndValidity()
    );
    this.tax.valueChanges.subscribe(() =>
      this.purchaseOrderItems.updateValueAndValidity()
    );
    this.purchaseOrderItems.updateValueAndValidity(); */
  }

  get vendorId(): FormControl {
    return this.purchaseOrderForm.get('vendorId') as FormControl;
  }

  get status(): FormControl {
    return this.purchaseOrderForm.get('status') as FormControl;
  }
  get expectedDate(): FormControl {
    return this.purchaseOrderForm.get('expectedDate') as FormControl;
  }

  get tax(): FormControl {
    return this.purchaseOrderForm.get('tax') as FormControl;
  }

  get discount(): FormControl {
    return this.purchaseOrderForm.get('discount') as FormControl;
  }
  get additionalFees(): FormControl {
    return this.purchaseOrderForm.get('additionalFees') as FormControl;
  }

  get note(): FormControl {
    return this.purchaseOrderForm.get('note') as FormControl;
  }
  get orderId(): FormControl {
    return this.purchaseOrderForm.get('orderId') as FormControl;
  }

  get orderDate(): FormControl {
    return this.purchaseOrderForm.get('orderDate') as FormControl;
  }

  get invoiceId(): FormControl {
    return this.purchaseOrderForm.get('invoiceId') as FormControl;
  }

  get invoiceDate(): FormControl {
    return this.purchaseOrderForm.get('invoiceDate') as FormControl;
  }
  get paymentDate(): FormControl {
    return this.purchaseOrderForm.get('paymentDate') as FormControl;
  }

  get shippedOn(): FormControl {
    return this.purchaseOrderForm.get('shippedOn') as FormControl;
  }

  get arrivalDate(): FormControl {
    return this.purchaseOrderForm.get('arrivalDate') as FormControl;
  }

  get purchaseOrderItems(): FormArray {
    return this.purchaseOrderForm.get('purchaseOrderItems') as FormArray;
  }

  selectedItemUnitPrice(index: number): FormControl {
    return this.purchaseOrderItems.controls[index].get(
      'unitPrice'
    ) as FormControl;
  }

  selectedItemId(index: number): FormControl {
    return this.purchaseOrderItems.controls[index].get('itemId') as FormControl;
  }

  selectedItemQuantity(index: number): FormControl {
    return this.purchaseOrderItems.controls[index].get(
      'quantity'
    ) as FormControl;
  }

  selectedItemExpectedDate(index: number): FormControl {
    return this.purchaseOrderItems.controls[index].get(
      'expectedDate'
    ) as FormControl;
  }

  private createPurchaseOrderItems(): FormGroup {
    return this.formBuilder.group({
      itemId: ['', Validators.required],
      quantity: ['', Validators.required],
      unitPrice: [''],
      expectedDate: ['']
    });
  }

  addPurchaseOrderItem(): void {
    this.purchaseOrderItems.push(this.createPurchaseOrderItems());
  }

  removePurchaseOrderItem(index: number): void {
    this.purchaseOrderItems.removeAt(index);
  }

  onSubmit(): void {
    if (this.purchaseOrderForm.valid) {
      if (!this.isUpdate) {
        const purchaseOrder = this.prepareNewPurchaseOrderData();

        if (purchaseOrder.Status !== 'RFQ') {
          this.purchaseOrderApi
            .createPurchaseOrder(purchaseOrder)
            .subscribe((data: PurchaseOrderDetailView) => {
              this.notification.showMessage(
                'Purchase order created successfully'
              );
              this.isUpdate = true;
              this.purchaseOrderId = data.id;
            });
        } else {
          this.purchaseOrderApi
            .createPurchaseQuotation(purchaseOrder)
            .subscribe((data: PurchaseOrderDetailView) => {
              this.notification.showMessage('Quotation created successfully');
              this.isUpdate = true;
              this.purchaseOrderId = data.id;
            });
        }
      }
    }
  }

  private prepareNewPurchaseOrderData(): PurchaseOrder {
    const newPurchaseOrder = new PurchaseOrder();
    newPurchaseOrder.VendorId = this.vendorId.value;
    newPurchaseOrder.Status = this.status.value;
    newPurchaseOrder.ExpectedDate = this.expectedDate.value;
    newPurchaseOrder.Tax = this.tax.value;
    newPurchaseOrder.Discount = this.discount.value;
    newPurchaseOrder.AdditionalFee = this.additionalFees.value;
    newPurchaseOrder.OrderId = this.orderId.value;
    newPurchaseOrder.OrderedDate = this.orderDate.value;
    newPurchaseOrder.InvoiceId = this.invoiceId.value;
    newPurchaseOrder.InvoiceDate = this.invoiceDate.value;
    newPurchaseOrder.PaymentDate = this.paymentDate.value;
    newPurchaseOrder.ShippedDate = this.shippedOn.value;
    newPurchaseOrder.ArrivalDate = this.arrivalDate.value;

    this.purchaseOrderItems.controls.forEach(element => {
      newPurchaseOrder.PurchaseOrderItems.push({
        ExpectedDate: element.value.expectedDate,
        ItemId: element.value.itemId,
        Quantity: element.value.quantity,
        UnitPrice: element.value.unitPrice,
        Id: 0
      });
    });

    return newPurchaseOrder;
  }
  itemChanged(event, i) {
    if (event.itemData) {
      this.selectedItemUnitPrice(i).setValue(event.itemData.price);

      this.selectedItemQuantity(i).clearValidators();
      this.selectedItemQuantity(i).setValidators([
        Validators.min(event.itemData.minimumQuantity),
        Validators.required
      ]);
      this.selectedItemQuantity(i).setValue(event.itemData.minimumQuantity);
    }
  }
}
