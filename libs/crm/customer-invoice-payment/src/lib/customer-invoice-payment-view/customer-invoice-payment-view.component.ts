import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryString } from '@bionic/components/data-grid';
import { CustomerInvoicePaymentApiService } from '@bionic/apis/crm/customer-invoice-payment-api';
import { NotificationComponent } from '@bionic/components/notification';
import { Subject } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { HttpErrorResponse } from '@angular/common/http';
import { customerInvoicePaymentColumns } from './customer-invoice-payment-view-blue-print';

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
      (deleteRecord)="deleteInvoicePayment($event)"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>

    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./customer-invoice-payment-view.component.css']
})
export class CustomerInvoicePaymentViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = customerInvoicePaymentColumns;

  constructor(private customerApi: CustomerInvoicePaymentApiService) {
    this.data = this.customerApi;
    this.customerApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.customerApi.execute(new QueryString());
  }

  deleteInvoicePayment(data: any): void {
    this.customerApi.deleteInvoicePayment(data['Id']).subscribe(
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
