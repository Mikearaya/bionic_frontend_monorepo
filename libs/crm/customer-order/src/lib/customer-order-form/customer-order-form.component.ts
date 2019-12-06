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
  NewCustomerOrderModel
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
        .subscribe((data: CustomerOrderDetailView) => (this.orderData = data));
    }
  }

  createForm(): void {
    this.salesOrderForm = this.formBuilder.group({
      Client: ['', Validators.required],
      DeliveryDate: ['', Validators.required],
      Status: ['Quotation', Validators.required],
      Description: [''],
      Orders: this.formBuilder.array([
        this.formBuilder.group({
          ItemId: ['', Validators.required],
          UnitPrice: [0, [Validators.required, Validators.min(0)]],
          Quantity: [1, [Validators.required, Validators.min(1)]],
          DueDate: ['', Validators.required]
        })
      ])
    });
  }

  initializeForm(data: CustomerOrderDetailView): void {
    this.salesOrderForm.patchValue(data);
  }

  get orderedBy(): FormControl {
    return this.salesOrderForm.get('OrderedBy') as FormControl;
  }

  get deliveryDate(): FormControl {
    return this.salesOrderForm.get('DeliveryDate') as FormControl;
  }

  get status(): FormControl {
    return this.salesOrderForm.get('Status') as FormControl;
  }

  get client(): FormControl {
    return this.salesOrderForm.get('Client') as FormControl;
  }
  get orders(): FormArray {
    return this.salesOrderForm.get('Orders') as FormArray;
  }

  addOrder() {
    this.orders.push(
      this.formBuilder.group({
        ItemId: ['', Validators.required],
        UnitPrice: [0, [Validators.required]],
        Quantity: [1, [Validators.required, Validators.min(0)]],
        DueDate: ['', Validators.required]
      })
    );
  }

  onSubmit() {
    const form = this.salesOrderForm.value;

    if (!this.isUpdate) {
      const order = this.prepareNewFormData(form);
      this.customerOrderApi
        .createSalesOrder(order)
        .subscribe((co: CustomerOrderDetailView) => {
          this.notification.showMessage('Customer order Created Successfuly');
          this.route.navigate([`../${co.Id}/booking`], {
            relativeTo: this.activatedRoute
          });
        });
    } else {
    }
  }

  prepareNewFormData(form: any): NewCustomerOrderModel {
    const order: NewCustomerOrderModel = {
      ClientId: form.Client ? form.Client : null,
      Description: form.Description,
      Status: form.Status,
      DeliveryDate: form.DeliveryDate,
      CustomerOrderItem: []
    };

    form.Orders.forEach(element => {
      order.CustomerOrderItem.push({
        ItemId: element.ItemId,
        Quantity: element.Quantity,
        DueDate: element.DueDate,
        PricePerItem: element.UnitPrice
      });
    });

    return order;
  }
}
