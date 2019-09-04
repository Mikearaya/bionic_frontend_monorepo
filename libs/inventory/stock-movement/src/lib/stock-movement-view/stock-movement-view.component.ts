import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryString } from '@bionic/components/data-grid';
import { Subject } from 'rxjs';
import { NotificationComponent } from '@bionic/components/notification';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { StockMovementApiService } from '@bionic/apis/inventory/stock-movement-api';

@Component({
  selector: 'bionic-stock-movement-view',
  template: `
    <bionic-data-view
      [data]="data"
      [showAdd]="true"
      [showDelete]="false"
      [enableSorting]="true"
      [showUpdate]="true"
      [addPrivilage]="'canAddMovements'"
      [updatePrivilage]="'canEditMovements'"
      [deletePrivilage]="'canDeleteMovements'"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>
    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./stock-movement-view.component.css']
})
export class StockMovementViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = [];

  constructor(private stockMovementApi: StockMovementApiService) {
    this.data = this.stockMovementApi;
    this.stockMovementApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.stockMovementApi.execute(new QueryString());
  }

  /*  deleteMovement(data: any): void {
    this.stockMovementApi.deleteMovement(data['Id']).subscribe(
      () => this.notification.showMessage('Stock Batch Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Stock Batch', 'error');
      }
    );
  } */

  onDataStateChange(state: QueryString): void {
    this.stockMovementApi.execute(state);
  }
}
