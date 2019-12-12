import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';
import { Observable, Subject } from 'rxjs';
import { CustomerInvoicePaymentApiOptionsService } from './customer-invoice-payment-api-options.service';
import { HttpClient } from '@angular/common/http';
import { InvoicePaymentListView } from './models/invoice-payment-list-view.model';
import { InvoicePaymentModel } from './models/invoice-payment.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerInvoicePaymentApiService extends Subject<
  DataStateChangeEventArgs
> {
  private controller = 'crm/invoice-payments';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private invoicePaymentApiOptions: CustomerInvoicePaymentApiOptionsService,
    private httpClient: HttpClient
  ) {
    super();
  }

  getAllCustomerOrders(): Observable<InvoicePaymentListView[]> {
    return this.httpClient.get<InvoicePaymentListView[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  getCustomerOrderById(id: number): Observable<InvoicePaymentListView> {
    return this.httpClient.get<InvoicePaymentListView>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }

  createSalesOrder(
    customerOrder: InvoicePaymentModel
  ): Observable<InvoicePaymentListView> {
    return this.httpClient.post<InvoicePaymentListView>(
      `${this.apiUrl}/${this.controller}`,
      customerOrder
    );
  }

  updateSalesOrder(id: number, finishedProduct: any): Observable<Boolean> {
    finishedProduct.Id = id;
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
