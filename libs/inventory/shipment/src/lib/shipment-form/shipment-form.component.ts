import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import {
  Query,
  DataManager,
  WebApiAdaptor,
  ReturnOption
} from '@syncfusion/ej2-data';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationComponent } from '@bionic/components/notification';
import {
  ShipmentViewDetail,
  ShipmentApiService,
  Shipment
} from '@bionic/apis/inventory/shipment-api';

@Component({
  selector: 'bionic-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.css']
})
export class ShipmentFormComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;
  public shipmentForm: FormGroup;
  public orderList: Object[];
  public customerOrder: number;
  public orderItems: ShipmentViewDetail[];
  employeeQuery: Query;
  employeeFields: { text: string; value: string };
  employeesList: Object[];

  constructor(
    private shipmentApi: ShipmentApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.createForm();
  }
  customerOrderChange(event: any): void {
    alert(event);
    this.shipmentApi
      .getCustomerOrderShipments(event)
      .subscribe((data: ShipmentViewDetail[]) =>
        this.shipmentItems.patchValue(data)
      );
  }
  ngOnInit() {
    this.customerOrder = +this.activatedRoute.snapshot.paramMap.get(
      'customerOrderId'
    );
    if (this.customerOrder) {
      this.createForm();
      this.shipmentApi
        .getCustomerOrderShipments(this.customerOrder)
        .subscribe((data: ShipmentViewDetail[]) => this.initializeForm(data));
    }
  }

  createForm(): void {
    this.shipmentForm = this.formBuilder.group({
      CustomerOrderId: ['', Validators.required],
      BookedBy: ['', Validators.required],
      DeliveryDate: ['', Validators.required],
      ShipmentNote: '',
      ShipmentItems: this.formBuilder.array([])
    });
  }

  initializeShipmentItems(data: ShipmentViewDetail): FormGroup {
    return this.formBuilder.group({
      orderItemId: [data.CustomerOrderItemId],
      quantity: [
        data.AvalableForShipment,
        [Validators.min(0), Validators.max(data.AvalableForShipment)]
      ]
    });
  }

  initializeForm(data: ShipmentViewDetail[]) {
    this.orderItems = data;
    this.shipmentForm.patchValue(data);
  }

  get shipmentItems(): FormArray {
    return this.shipmentForm.get('ShipmentItems') as FormArray;
  }

  get customerOrderId(): FormControl {
    return this.shipmentForm.get('CustomerOrderId') as FormControl;
  }

  get deliveryDate(): FormControl {
    return this.shipmentForm.get('DeliveryDate') as FormControl;
  }

  get shipmentNote(): FormControl {
    return this.shipmentForm.get('ShipmentNote') as FormControl;
  }
  get bookedBy(): FormControl {
    return this.shipmentForm.get('BookedBy') as FormControl;
  }

  onSubmit(): void {
    const shipment: Shipment = this.prepateData();
    this.shipmentApi.createNewShipment(shipment).subscribe((data: Shipment) => {
      this.notification.showMessage('Shipment Created  Successfuly'),
        this.router.navigate([`shipments/${data.Id}`]);
    });
  }

  prepateData(): Shipment {
    const formData = this.shipmentForm.value;
    const shipmentData: Shipment = {
      CustomerOrderId: formData.CustomerOrderId,
      DeliveryDate: formData.DeliveryDate,
      ShipmentNote: formData.ShipmentNote,
      BookedBy: formData.BookedBy,
      Status: 'new',
      ShipmentItems: []
    };
    const c = this.shipmentItems.value;
    c.forEach(element => {
      shipmentData.ShipmentItems.push({
        CustomerOrderItemId: element.OrderItemId,
        Quantity: element.Quantity
      });
    });

    return shipmentData;
  }
}
