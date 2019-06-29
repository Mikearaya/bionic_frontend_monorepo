import { Injectable } from '@angular/core';
import { PartnerPaymentView } from './models/partner-payment-view.model';
import { Observable, Subject } from 'rxjs';
import { PartnerPaymentListView } from './models/partner-payment-list-view.model';
import { PartnerPayment } from './models/partner-payment.model';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PartnersPaymentApiService extends Subject<
  DataStateChangeEventArgs
> {
  private apiUrl = `http://${
    window.location.hostname
  }:5000/api/partner/payments`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getPartnerPaymentById(id: number): Observable<PartnerPaymentView> {
    return this.httpClient.get<PartnerPaymentView>(`${this.apiUrl}/${id}`);
  }

  getPartnerPaymentsList(): Observable<PartnerPaymentListView[]> {
    return this.httpClient.get<PartnerPaymentListView[]>(`${this.apiUrl}`);
  }

  addNewPartnerPayment(
    payment: PartnerPayment
  ): Observable<PartnerPaymentListView> {
    return this.httpClient.post<PartnerPaymentListView>(
      `${this.apiUrl}`,
      payment
    );
  }

  updatePartnerPayment(payment: PartnerPayment): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${payment.Id}`, payment);
  }

  deletePartnerPayment(id: number): Observable<void> {
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
