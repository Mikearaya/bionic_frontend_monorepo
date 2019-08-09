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

    if (this.purchaseOrderId) {
      this.isUpdate = true;
      this.purchaseOrderApi
        .getPurchaseOrderById(this.purchaseOrderId)
        .subscribe((data: PurchaseOrderDetailView) =>
          this.initializeForm(data)
        );
    }
  }

  private createForm(): void {
    this.purchaseOrderForm = this.formBuilder.group({
      VendorId: ['', Validators.required],
      Status: ['', Validators.required],
      ExpectedDate: ['', Validators.required],
      Tax: [''],
      Discount: [''],
      AdditionalFees: [''],
      Note: [''],
      OrderId: [''],
      OrderedDate: [''],
      InvoiceId: [''],
      InvoiceDate: [''],
      PaymentDate: [''],
      ShippedOn: [''],
      ArrivalDate: [''],
      PurchaseOrderItems: this.formBuilder.array([
        this.createPurchaseOrderItems()
      ])
    });

    this.purchaseOrderItems.valueChanges.subscribe(e =>
      this.calculatePrices(e)
    );
    this.getControl('Discount').valueChanges.subscribe(() =>
      this.purchaseOrderItems.updateValueAndValidity()
    );
    this.getControl('Tax').valueChanges.subscribe(() =>
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
      subTotals - subTotals * (this.getControl('Discount').value / 100);
    this.totalAfterTax =
      this.totalBeforeDiscount -
      this.totalBeforeDiscount * (this.getControl('Tax').value / 100);
    this.totalAfterAdditionalFee =
      this.totalAfterTax + this.getControl('AdditionalFees').value;
  }
  private initializeForm(data: PurchaseOrderDetailView): void {
    this.purchaseOrderForm.patchValue(data);
  }

  get purchaseOrderItems(): FormArray {
    return this.purchaseOrderForm.get('PurchaseOrderItems') as FormArray;
  }

  getControl(control: string): FormControl {
    return this.purchaseOrderForm.get(control) as FormControl;
  }

  private createPurchaseOrderItems(): FormGroup {
    return this.formBuilder.group({
      ItemId: ['', Validators.required],
      Quantity: ['', Validators.required],
      UnitPrice: [''],
      ExpectedDate: ['']
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
    const newPurchaseOrder: PurchaseOrder = this.purchaseOrderForm.value;

    return newPurchaseOrder;
  }

  itemChanged(event, i) {
    if (event.itemData) {
    }
  }
}
