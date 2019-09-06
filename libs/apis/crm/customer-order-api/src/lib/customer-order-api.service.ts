import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerOrderApiOptionsService } from './customer-order-api-options.service';
import { CustomerOrderListView } from './models/customer-order-list.model';

import { CustomerOrderDetailView } from './models/customer-order-detail-view.model';
import { NewCustomerOrderModel } from './models/new-customer-order.model';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CustomerOrderApiService extends Subject<DataStateChangeEventArgs> {
  private controller = 'crm/customer-orders';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private customerOrderApiOptions: CustomerOrderApiOptionsService,
    private httpClient: HttpClient
  ) {
    super();
  }

  getAllCustomerOrders(): Observable<CustomerOrderListView[]> {
    return this.httpClient.get<CustomerOrderListView[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  getCustomerOrderById(id: number): Observable<CustomerOrderDetailView> {
    return this.httpClient.get<CustomerOrderDetailView>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }

  /* getCustomerOrderShipmentsSummary(
    customerOrderId: number
  ): Observable<ShipmentSummary[]> {
    return this.httpClient.get<ShipmentSummary[]>(
      `${this.apiUrl}/shipments/${
        this.controller
      }/${customerOrderId}?type=summary`
    );
  }

  getSalesOrderInvoices(id: number): Observable<InvoiceSummary[]> {
    return this.httpClient.get<InvoiceSummary[]>(
      `${this.apiUrl}/${this.controller}/${id}/invoices?type=summary`
    );
  } */

  createSalesOrder(
    customerOrder: NewCustomerOrderModel
  ): Observable<CustomerOrderDetailView> {
    return this.httpClient.post<CustomerOrderDetailView>(
      `${this.apiUrl}/${this.controller}`,
      customerOrder
    );
  }

  updateSalesOrder(
    id: number,
    finishedProduct: NewCustomerOrderModel
  ): Observable<Boolean> {
    return this.httpClient.put<Boolean>(
      `${this.apiUrl}/${this.controller}/${id}`,
      finishedProduct
    );
  }

  deleteSalesOrder(id: number): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }

  updateCustomerOrderStatus(
    customerOrderId: number,
    newStatus: string
  ): Observable<boolean> {
    return this.httpClient.put<boolean>(
      `${this.apiUrl}/${this.controller}/${customerOrderId}`,
      { status: newStatus }
    );
  }

  execute(state: QueryString): void {
    this.getData(state).subscribe(a => this.next(a));
  }

  getData(state: QueryString): Observable<DataStateChangeEventArgs> {
    return this.httpClient
      .post(`${this.apiUrl}/${this.controller}/filter`, state)
      .pipe(
        map(
          (response: any) =>
            ({
              result: response['Items'],
              count: parseInt(response['Count'], 10)
            } as DataResult)
        )
      )
      .pipe((data: any) => data);
  }
}
