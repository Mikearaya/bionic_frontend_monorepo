import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { FreightOrderPaymentRequestView } from './models/freight-order-payment-request-view.model';
import { FreightOrderPaymentRequest } from './models/freight-order-payment-request.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FreightOrderPaymentRequestApiService extends Subject<
  DataStateChangeEventArgs
> {
  private apiUrl = `http://${
    window.location.hostname
  }:5000/api/freight-payments/requests`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getPaymentRequestById(
    id: number
  ): Observable<FreightOrderPaymentRequestView> {
    return this.httpClient.get<FreightOrderPaymentRequestView>(
      `${this.apiUrl}/${id}`
    );
  }

  getPaymentRequestsList(): Observable<FreightOrderPaymentRequestView[]> {
    return this.httpClient.get<FreightOrderPaymentRequestView[]>(
      `${this.apiUrl}`
    );
  }

  createPaymentRequest(
    PaymentRequest: FreightOrderPaymentRequest
  ): Observable<FreightOrderPaymentRequestView> {
    return this.httpClient.post<FreightOrderPaymentRequestView>(
      `${this.apiUrl}`,
      PaymentRequest
    );
  }

  updatePaymentRequest(
    PaymentRequest: FreightOrderPaymentRequest
  ): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${PaymentRequest.Id}`,
      PaymentRequest
    );
  }

  deletePaymentRequest(id: number): Observable<void> {
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
