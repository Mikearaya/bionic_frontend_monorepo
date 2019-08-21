import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { QueryString } from '@bionic/components/data-grid';
import { PurchaseOrderPaymentsApiOptionsService } from './purchase-order-payments-api-options.service';
import { HttpClient } from '@angular/common/http';
import { PurchaseOrderPayment } from './models/purchase-order-payment.model';
import { PurchaseOrderPaymentView } from './models/purchase-order-payment-view.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PurchaseOrderPaymentsApiService extends Subject<
  DataStateChangeEventArgs
> {
  private controller = 'procurments/purchase-orders-payments';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private purchaseOrderPaymentApiOption: PurchaseOrderPaymentsApiOptionsService,
    private httpClient: HttpClient
  ) {
    super();
    this.controller = this.purchaseOrderPaymentApiOption.apiUrl;
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

  addNewPurchaseOrderPayment(
    payment: PurchaseOrderPayment
  ): Observable<PurchaseOrderPaymentView> {
    return this.httpClient.post<PurchaseOrderPaymentView>(
      `${this.apiUrl}/${this.controller}`,
      payment
    );
  }

  getPurchaseOrderPaymentById(
    id: number
  ): Observable<PurchaseOrderPaymentView> {
    return this.httpClient.get<PurchaseOrderPaymentView>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }

  updatePurchaseOrderPayment(payment: PurchaseOrderPayment): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${this.controller}/${payment.Id}`,
      payment
    );
  }

  deletePurchaseOrderPayment(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }
}
