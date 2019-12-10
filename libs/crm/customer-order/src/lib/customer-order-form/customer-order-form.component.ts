import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { NotificationComponent } from '@bionic/components/notification';
import {
  CustomerOrderDetailView,
  CustomerOrderApiService,
  NewCustomerOrderModel,
  CustomerOrderItemModel
} from '@bionic/apis/crm/customer-order-api';

/*
 * @CreateTime: Nov 9, 2018 1:35 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Nov 29, 2018 12:26 AM
 * @Description: Modify Here, Please
 */

@Component({
  selector: 'bionic-customer-order-form',
  templateUrl: './customer-order-form.component.html',
  styleUrls: ['./customer-order-form.component.css']
})
export class CustomerOrderFormComponent implements OnInit {
  @ViewChild('notification') notification: NotificationComponent;

  public isVisable: Boolean = false;
  private customerOrderId: number;
  public isUpdate: Boolean;

  private orderData: CustomerOrderDetailView;
  public salesOrderForm: FormGroup;
  public itemId: FormControl;
  public errors: Object[] = [];

  public employeesList: any[];
  public customersList: any[];
  public today: Date;
  public orderStatus = [
    'Quotation',
    'Waiting for Confirmation',
    'Confirmed',
    'Canceled',
    'Delivered'
  ];
  public errorDescription: any;

  constructor(
    private customerOrderApi: CustomerOrderApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    this.createForm();
    this.today = new Date();
  }

  ngOnInit(): void {
    this.customerOrderId = +this.activatedRoute.snapshot.paramMap.get(
      'customerOrderId'
    );

    if (this.customerOrderId) {
      this.isUpdate = true;
      this.customerOrderApi
        .getCustomerOrderById(this.customerOrderId)
        .subscribe((data: CustomerOrderDetailView) => {
          this.orderData = data;
          this.initializeForm(data);
        });
    }
  }

  createForm(): void {
    this.salesOrderForm = this.formBuilder.group({
      ClientId: ['', Validators.required],
      DueDate: ['', Validators.required],
      OrderStatus: ['Quotation', Validators.required],
      Description: [''],
      CustomerOrderItem: this.formBuilder.array([
        this.formBuilder.group({
          ItemId: ['', Validators.required],
          PricePerItem: [0, [Validators.required, Validators.min(0)]],
          Quantity: [1, [Validators.required, Validators.min(1)]],
          DueDate: ['', Validators.required]
        })
      ])
    });
  }

  initializeForm(data: CustomerOrderDetailView): void {
    this.salesOrderForm.patchValue(data);
    if (data.CustomerOrderItem.length > 0) {
      this.orders.controls = [];
      data.CustomerOrderItem.forEach(e => {
        this.orders.controls.push(this.getInitializeOrder(e));
      });
    }
  }

  get orderedBy(): FormControl {
    return this.salesOrderForm.get('OrderedBy') as FormControl;
  }

  get deliveryDate(): FormControl {
    return this.salesOrderForm.get('DueDate') as FormControl;
  }

  get status(): FormControl {
    return this.salesOrderForm.get('OrderStatus') as FormControl;
  }

  get client(): FormControl {
    return this.salesOrderForm.get('ClientId') as FormControl;
  }
  get orders(): FormArray {
    return this.salesOrderForm.get('CustomerOrderItem') as FormArray;
  }

  addOrder() {
    this.orders.push(
      this.formBuilder.group({
        ItemId: ['', Validators.required],
        PricePerItem: [0, [Validators.required]],
        Quantity: [1, [Validators.required, Validators.min(0)]],
        DueDate: ['', Validators.required]
      })
    );
  }

  getInitializeOrder(data: CustomerOrderItemModel) {
    return this.formBuilder.group({
      Id: [data.Id],
      ItemId: [data.ItemId, Validators.required],
      PricePerItem: [data.PricePerItem, [Validators.required]],
      Quantity: [data.Quantity, [Validators.required, Validators.min(0)]],
      DueDate: [data.DueDate, Validators.required]
    });
  }

  onSubmit() {
    const form = this.salesOrderForm.value;
    const order = this.prepareNewFormData(form);

    if (!this.isUpdate) {
      this.customerOrderApi
        .createSalesOrder(order)
        .subscribe((co: CustomerOrderDetailView) => {
          this.notification.showMessage('Customer order Created Successfuly');
          this.route.navigate([`../${co.Id}/booking`], {
            relativeTo: this.activatedRoute
          });
        });
    } else {
      this.customerOrderApi
        .updateSalesOrder(this.customerOrderId, order)
        .subscribe(
          () =>
            this.notification.showMessage('Customer order updated successfuly'),
          error =>
            this.notification.showMessage(
              'Error occured while updating Customer order',
              'error'
            )
        );
    }
  }

  prepareNewFormData(form: any): NewCustomerOrderModel {
    const order: NewCustomerOrderModel = form;

    return order;
  }
}
