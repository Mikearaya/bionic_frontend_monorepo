import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { CustomerPaymentView } from './models/customer-payment-view.model';
import { CustomerPaymentListView } from './models/customer-payment-list-view.model';
import { CustomerPayment } from './models/customer-payment.model';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { UnpaidCustomerRent } from './models/unpaid-customer-rent.model';

@Injectable()
export class CustomersPaymentApiService extends Subject<
  DataStateChangeEventArgs
> {
  private apiUrl = `http://${
    window.location.hostname
  }:5000/api/customer-payments`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getCustomerPaymentById(id: number): Observable<CustomerPaymentView> {
    return this.httpClient.get<CustomerPaymentView>(`${this.apiUrl}/${id}`);
  }

  getUnpaidCustomerRent(customerId: number): Observable<UnpaidCustomerRent[]> {
    return this.httpClient.get<UnpaidCustomerRent[]>(
      `${this.apiUrl}/unpaid/${customerId}`
    );
  }

  getCustomerPaymentsList(): Observable<CustomerPaymentListView[]> {
    return this.httpClient.get<CustomerPaymentListView[]>(`${this.apiUrl}`);
  }

  addNewCustomerPayment(
    payment: CustomerPayment
  ): Observable<CustomerPaymentView> {
    return this.httpClient.post<CustomerPaymentView>(`${this.apiUrl}`, payment);
  }

  updateCustomerPayment(payment: CustomerPayment): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${payment.Id}`, payment);
  }

  deleteCustomerPayment(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  execute(state: QueryString): void {
    this.getData(state).subscribe(a => this.next(a));
  }

  getData(state: QueryString): Observable<DataStateChangeEventArgs> {
    return this.httpClient
      .post(`${this.apiUrl}/filter`, state)
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
