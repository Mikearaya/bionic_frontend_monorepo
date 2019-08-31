import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { itemGroupColumnBluePrint } from './item-group-view-blue-print';

import { Subject } from 'rxjs';
import { ItemGroupsApiService } from '@bionic/apis/inventory/item-groups-api';
import { QueryString } from '@bionic/components/data-grid';
import { NotificationComponent } from '@bionic/components/notification';
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
  styleUrls: ['./item-group-view.component.css']
})
export class ItemGroupViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = itemGroupColumnBluePrint;

  constructor(private itemGroupApi: ItemGroupsApiService) {
    this.data = this.itemGroupApi;
    this.itemGroupApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.itemGroupApi.execute(new QueryString());
  }

  deleteItem(data: any): void {
    this.itemGroupApi.deleteItemGroup(data['Id']).subscribe(
      () => this.notification.showMessage('Item Group Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Item Group', 'error');
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.itemGroupApi.execute(state);
  }
}
