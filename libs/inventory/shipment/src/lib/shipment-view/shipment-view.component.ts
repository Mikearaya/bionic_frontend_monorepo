import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationComponent } from '@bionic/components/notification';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { shipmentBluePrint } from './shipment-view-blue-print';
import { ShipmentApiService } from '@bionic/apis/inventory/shipment-api';
import { QueryString } from '@bionic/components/data-grid';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  template: `
    <bionic-data-view
      [data]="data"
      [showAdd]="true"
      [showDelete]="true"
      [enableSorting]="true"
      [showUpdate]="true"
      [addPrivilage]="'canAddShipments'"
      [updatePrivilage]="'canEditShipments'"
      [deletePrivilage]="'canDeleteShipments'"
      (deleteRecord)="deleteShipment($event)"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>
    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./shipment-view.component.css']
})
export class ShipmentViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = shipmentBluePrint;

  constructor(private shipmentApi: ShipmentApiService) {
    this.data = this.shipmentApi;
    this.shipmentApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.shipmentApi.execute(new QueryString());
  }

  deleteShipment(data: any): void {
    this.shipmentApi.deleteShipment(data['Id']).subscribe(
      () => this.notification.showMessage('Write Off Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Write Off', 'error');
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.shipmentApi.execute(state);
  }
}
