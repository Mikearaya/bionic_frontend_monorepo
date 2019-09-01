import { Component, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { unitOfMeasurementColumnBluePrint } from './unit-of-measurment-view-blue-print';
import { NotificationComponent } from '@bionic/components/notification';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { UnitOfMeasurmentsApiService } from '@bionic/apis/inventory/unit-of-measurments-api';
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
      [addPrivilage]="'canAddUnitOfMeasurments'"
      [updatePrivilage]="'canEditUnitOfMeasurments'"
      [deletePrivilage]="'canDeleteUnitOfMeasurments'"
      (deleteRecord)="deleteUnitOfMeasurment($event)"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>
    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./unit-of-measurment-view.component.css']
})
export class UnitOfMeasurmentViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = unitOfMeasurementColumnBluePrint;

  constructor(private uomApi: UnitOfMeasurmentsApiService) {
    this.data = this.uomApi;
    this.uomApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.uomApi.execute(new QueryString());
  }

  deleteUnitOfMeasurment(data: any): void {
    this.uomApi.deleteUnitOfMeasurment(data['Id']).subscribe(
      () => this.notification.showMessage('Unit of Measurment Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage(
          'Unable to Delete Unit of Measurment',
          'error'
        );
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.uomApi.execute(state);
  }
}
