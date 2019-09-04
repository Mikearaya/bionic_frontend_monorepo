import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { shipmentDetailBluePrint } from '../shipment-view/shipment-view-blue-print';
import { NotificationComponent } from '@bionic/components/notification';
import {
  ShipmentView,
  ShipmentApiService
} from '@bionic/apis/inventory/shipment-api';

@Component({
  selector: 'bionic-shipment-detail-view',
  templateUrl: './shipment-detail-view.component.html',
  styleUrls: ['./shipment-detail-view.component.css']
})
export class ShipmentDetailViewComponent implements OnInit {
  @ViewChild('notitfication')
  private notification: NotificationComponent;
  private shipmentId: number;
  public shipment: ShipmentView;
  public columnBluePrint = shipmentDetailBluePrint;
  customAttributes: { class: string };

  constructor(
    private activatedRoute: ActivatedRoute,
    private shipmentApi: ShipmentApiService
  ) {
    this.customAttributes = { class: 'info-grid-header' };
  }

  ngOnInit() {
    this.shipmentId = +this.activatedRoute.snapshot.paramMap.get('shipmentId');

    if (this.shipmentId) {
      this.shipmentApi
        .getShipmentById(this.shipmentId)
        .subscribe((data: ShipmentView) => (this.shipment = data));
    }
  }

  pickShipment() {
    this.shipmentApi
      .pickAllShipmentItems(this.shipmentId)
      .subscribe(_ =>
        this.notification.showMessage('Items picked from inventory successfuly')
      );
  }
}
