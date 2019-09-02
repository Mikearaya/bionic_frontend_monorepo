import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Component, OnInit, ViewChild } from '@angular/core';
import { stockBatchColumnBluePrint } from './stock-batch-view-blue-print.model';
import { StockBatchApiService } from '@bionic/apis/inventory/stock-batch-api';
import { QueryString } from '@bionic/components/data-grid';
import { Subject } from 'rxjs';
import { NotificationComponent } from '@bionic/components/notification';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  template: `
    <bionic-data-view
      [data]="data"
      [showAdd]="true"
      [showDelete]="true"
      [enableSorting]="true"
      [showUpdate]="true"
      [addPrivilage]="'canAddStockBatchs'"
      [updatePrivilage]="'canEditStockBatchs'"
      [deletePrivilage]="'canDeleteStockBatchs'"
      (deleteRecord)="deleteStockBatch($event)"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>
    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./stock-batch-view.component.css']
})
export class StockBatchViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = stockBatchColumnBluePrint;

  constructor(private stockBatchApi: StockBatchApiService) {
    this.data = this.stockBatchApi;
    this.stockBatchApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.stockBatchApi.execute(new QueryString());
  }

  deleteStockBatch(data: any): void {
    this.stockBatchApi.deleteStockBatch(data['Id']).subscribe(
      () => this.notification.showMessage('Stock Batch Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Stock Batch', 'error');
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.stockBatchApi.execute(state);
  }
}
