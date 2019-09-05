/*
 * @CreateTime: Sep 5, 2018 8:46 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Nov 27, 2018 4:55 PM
 * @Description: Modify Here, Please
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DataStateChangeEventArgs
} from '@syncfusion/ej2-angular-grids';

import { Subject } from 'rxjs';
import { QueryString } from '@bionic/components/data-grid';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationComponent } from '@bionic/components/notification';
import { customerViewColumnsBluePrint } from './customer-view-blue-print.model';
import { CustomerApiService } from '@bionic/apis/crm/customer-api';


@Component({
   template: `
    <bionic-data-view
      [data]="data"
      [showAdd]="true"
      [showDelete]="true"
      [enableSorting]="true"
      [showUpdate]="true"
      [addPrivilage]="'canAddCustomers'"
      [updatePrivilage]="'canEditCustomers'"
      [deletePrivilage]="'canDeleteCustomers'"
      (deleteRecord)="deleteCustomer($event)"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>

    <bionic-notification #notification></bionic-notification>
  `,
   styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent  implements OnInit {
   @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = customerViewColumnsBluePrint;

  constructor(private customerApi: CustomerApiService) {
    this.data = this.customerApi;
    this.customerApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.customerApi.execute(new QueryString());
  }

  deleteCustomer(data: any): void {
    this.customerApi.deleteCustomer(data['Id']).subscribe(
      () => this.notification.showMessage('Item Group Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Item Group', 'error');
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.customerApi.execute(state);
  }
}
