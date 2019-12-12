import { Injectable } from '@angular/core';

import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomerInvoice } from './models/customer-invoice.model';
import { CustomerInvoiceList } from './models/customer-invoice-list.model';

@Injectable()
export class CustomerInvoiceApiService extends Subject<
  DataStateChangeEventArgs
> {
  private controller = 'crm/customer-invoices';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getCustomerById(id: number): Observable<CustomerInvoice> {
    return this.httpClient.get<CustomerInvoice>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }

  /*   getCustomersIndex(filter: string = ''): Observable<CustomerIndex[]> {
    return this.httpClient.get<CustomerIndex[]>(
      `${this.apiUrl}/${this.controller}/index?name=${filter}`
    );
  }
 */
  getAllCustomerInvoices(): Observable<CustomerInvoiceList[]> {
    return this.httpClient.get<CustomerInvoiceList[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  addCustomerInvoices(
    newCustomer: CustomerInvoice
  ): Observable<CustomerInvoice> {
    return this.httpClient.post<CustomerInvoice>(
      `${this.apiUrl}/${this.controller}`,
      newCustomer
    );
  }
  updateCustomerInvoices(
    updatedCustomer: CustomerInvoice
  ): Observable<Boolean> {
    return this.httpClient.put<Boolean>(
      `${this.apiUrl}/${this.controller}/${updatedCustomer.Id}`,
      updatedCustomer
    );
  }

  deleteCustomerInvoices(customerId: number): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(
      `${this.apiUrl}/${this.controller}/${customerId}`
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
