import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { FreightOrderPaymentRecievingView } from './models/freight-order-payment-recieving-view.model';
import { FreightOrderPaymentRecieving } from './models/freight-order-payment-recieving.model';
import { map } from 'rxjs/operators';

@Injectable()
export class FreightOrderPaymentRecievingApiService extends Subject<
  DataStateChangeEventArgs
> {
  private apiUrl = `http://${
    window.location.hostname
  }:5000/api/freight-payments/recievings`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getPaymentRecievingById(
    id: number
  ): Observable<FreightOrderPaymentRecievingView> {
    return this.httpClient.get<FreightOrderPaymentRecievingView>(
      `${this.apiUrl}/${id}`
    );
  }

  getPaymentRecievingsList(): Observable<FreightOrderPaymentRecievingView[]> {
    return this.httpClient.get<FreightOrderPaymentRecievingView[]>(
      `${this.apiUrl}`
    );
  }

  createPaymentRecieving(
    PaymentRecieving: FreightOrderPaymentRecieving
  ): Observable<FreightOrderPaymentRecievingView> {
    return this.httpClient.post<FreightOrderPaymentRecievingView>(
      `${this.apiUrl}`,
      PaymentRecieving
    );
  }

  updatePaymentRecieving(
    PaymentRecieving: FreightOrderPaymentRecieving
  ): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${PaymentRecieving.Id}`,
      PaymentRecieving
    );
  }

  deletePaymentRecieving(id: number): Observable<void> {
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
