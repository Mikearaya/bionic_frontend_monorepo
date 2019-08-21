import { Component, OnInit, ViewChild } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { NotificationComponent } from '@bionic/components/notification';
import {
  PurchaseOrderDetailView,
  PurchaseOrderApiService,
  PurchaseOrderItemView
} from '@bionic/apis/procurment/purchase-order-api';
import { VendorViewModel } from '@bionic/apis/procurment/vendor-api';
import {
  PurchaseRecievingModel,
  PurchaseRecievingApiService
} from '@bionic/apis/procurment/purchase-recieving-api';

@Component({
  selector: 'bionic-purchase-recieving-form',
  templateUrl: './purchase-recieving-form.component.html',
  styleUrls: ['./purchase-recieving-form.component.css']
})
export class PurchaseRecievingFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;

  public purchaseOrderForm: FormGroup;
  public purchaseOrder: PurchaseOrderDetailView = new PurchaseOrderDetailView();
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
  /* public itemsList: ItemView[]; */
  public itemsList: any[];
  public itemFields: { text: string; value: string };

  public vendorsList: VendorViewModel[];
  public vendorFields: { text: string; value: string };

  private purchaseOrderId: number;
  totalBeforeDiscount: number;
  total: number;
  totalAfterTax: number;
  totalAfterAdditionalFee: number;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private purchaseOrderApi: PurchaseOrderApiService,
    private purchaseRecievingApi: PurchaseRecievingApiService
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
      this.purchaseOrderApi
        .getPurchaseOrderById(this.purchaseOrderId)
        .subscribe((data: PurchaseOrderDetailView) =>
          this.initializeForm(data)
        );
    }
  }

  private createForm(): void {
    this.purchaseOrderForm = this.formBuilder.group({
      purchaseOrderItems: this.formBuilder.array([
        this.createPurchaseOrderItems()
      ])
    });
  }

  private initializeForm(data: PurchaseOrderDetailView): void {
    this.purchaseOrder = data;

    this.purchaseOrderForm = this.formBuilder.group({
      purchaseOrderItems: this.formBuilder.array(
        data.PurchaseOrderItems.map(i => this.initializePurchaseOrderItems(i))
      )
    });
  }

  get purchaseOrderItems(): FormArray {
    return this.purchaseOrderForm.get('purchaseOrderItems') as FormArray;
  }

  initializePurchaseOrderItems(data: PurchaseOrderItemView): FormGroup {
    return this.formBuilder.group({
      lotId: [data.LotId, Validators.required],
      recieved: [
        data.Status.toUpperCase() === 'RECIEVED' ? 0 : data.Quantity,
        Validators.required
      ]
    });
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
      lotId: ['', Validators.required],
      recieved: ['', Validators.required]
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
      const purchaseOrder = this.prepareNewPurchaseOrderData();
      this.purchaseRecievingApi
        .addNewPurchaseRecieving(purchaseOrder)
        .subscribe((data: PurchaseOrderDetailView) => {
          this.notification.showMessage(
            'Purchase order items recieved successfully'
          );
          this.isUpdate = true;
          this.purchaseOrderId = data.Id;
          this.initializeForm(data);
        });
    }
  }

  private prepareNewPurchaseOrderData(): PurchaseRecievingModel {
    const newPurchaseOrder = new PurchaseRecievingModel();
    newPurchaseOrder.PurchaseOrderId = this.purchaseOrderId;
    this.purchaseOrderItems.controls.forEach(element => {
      newPurchaseOrder.PurchaseOrderItems.push({
        LotId: element.value.lotId,
        Quantity: element.value.recieved
      });
    });

    return newPurchaseOrder;
  }
}
