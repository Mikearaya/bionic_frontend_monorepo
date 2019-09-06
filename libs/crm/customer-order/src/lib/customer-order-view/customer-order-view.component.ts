/*
 * @CreateTime: Nov 11, 2018 12:09 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Nov 27, 2018 4:38 PM
 * @Description: Modify Here, Please
 */
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';

import { CustomerOrderApiService } from '@bionic/apis/crm/customer-order-api';
import { QueryString } from '@bionic/components/data-grid';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationComponent } from '@bionic/components/notification';
import { Subject } from 'rxjs';
import { customerOrderBluePrint } from './customer-order-view-blue-print';

@Component({
  template: `
    <bionic-data-view
      [data]="data"
      [showAdd]="true"
      [showDelete]="true"
      [enableSorting]="true"
      [showUpdate]="true"
      [addPrivilage]="'canAddCustomerOrders'"
      [updatePrivilage]="'canEditCustomerOrders'"
      [deletePrivilage]="'canDeleteCustomerOrders'"
      (deleteRecord)="deleteCustomerOrder($event)"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>

    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./customer-order-view.component.css']
})
export class CustomerOrderViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = customerOrderBluePrint;

  constructor(private customerApi: CustomerOrderApiService) {
    this.data = this.customerApi;
    this.customerApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.customerApi.execute(new QueryString());
  }

  deleteCustomerOrder(data: any): void {
    this.customerApi.deleteSalesOrder(data['Id']).subscribe(
      () => this.notification.showMessage('Customer Order Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Item Group', 'error');
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.customerApi.execute(state);
  }
}
