/*
 * @CreateTime: Sep 12, 2018 12:48 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Jan 31, 2019 8:12 PM
 * @Description: Modify Here, Please
 */

import { Component, OnInit, ViewChild } from '@angular/core';

import { stockViewColumnBluePrint } from './item-column-blue-print';
import { NotificationComponent } from '@bionic/components/notification';
import { ItemApiService } from '@bionic/apis/inventory/item-api';
import { Subject } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';

@Component({
  template: `
    <bionic-data-view
      [data]="data"
      [showAdd]="true"
      [showDelete]="true"
      [enableSorting]="true"
      [showUpdate]="true"
      [addPrivilage]="'canAddPurchaseOrders'"
      [updatePrivilage]="'canEditPurchaseOrders'"
      [deletePrivilage]="'canDeleteItems'"
      (deleteRecord)="deleteItem($event)"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>

    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = stockViewColumnBluePrint;

  constructor(private itemApi: ItemApiService) {
    this.data = this.itemApi;
    this.itemApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.itemApi.execute(new QueryString());
  }

  deleteItem(data: any): void {
    this.itemApi.deleteItemById(data['Id']).subscribe(
      () => this.notification.showMessage('Purchase Order Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Stock Batch', 'error');
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.itemApi.execute(state);
  }
}
