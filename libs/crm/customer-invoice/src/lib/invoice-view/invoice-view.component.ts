import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationComponent } from '@bionic/components/notification';
import { Subject } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { customerInvoiceViewColumnsBluePrint } from './invoice-view-colum.model';
import { CustomerInvoiceApiService } from '@bionic/apis/crm/customer-invoice-api';
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
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = customerInvoiceViewColumnsBluePrint;

  constructor(private customerApi: CustomerInvoiceApiService) {
    this.data = this.customerApi;
    this.customerApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.customerApi.execute(new QueryString());
  }

  deleteCustomer(data: any): void {
    this.customerApi.deleteCustomerInvoices(data['Id']).subscribe(
      () => this.notification.showMessage('Customer Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Customer', 'error');
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.customerApi.execute(state);
  }
}
