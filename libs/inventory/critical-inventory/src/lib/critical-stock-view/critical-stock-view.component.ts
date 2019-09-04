/*
 * @CreateTime: Nov 11, 2018 12:13 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Jan 31, 2019 8:23 PM
 * @Description: Modify Here, Please
 */
import { Component, OnInit, ViewChild } from '@angular/core';

import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import { criticalStockViewBluePrint } from './critical-stock-column-blue-print';
import { QueryString } from '@bionic/components/data-grid';
import { CriticalInventoryApiService } from '@bionic/apis/inventory/critical-inventory-api';
import { NotificationComponent } from '@bionic/components/notification';
import { Subject } from 'rxjs';

@Component({
  template: `
    <bionic-data-view
      [data]="data"
      [showAdd]="false"
      [showDelete]="false"
      [enableSorting]="true"
      [showUpdate]="true"
      [updatePrivilage]="'canEditCriticalInventories'"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>

    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./critical-stock-view.component.css']
})
export class CriticalStockViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = criticalStockViewBluePrint;

  constructor(private criticalInventoryApi: CriticalInventoryApiService) {
    this.data = this.criticalInventoryApi;
    this.criticalInventoryApi.executeProcured(new QueryString());
  }

  ngOnInit(): void {
    this.criticalInventoryApi.executeProcured(new QueryString());
  }

  onDataStateChange(state: QueryString): void {
    this.criticalInventoryApi.executeProcured(state);
  }
}
