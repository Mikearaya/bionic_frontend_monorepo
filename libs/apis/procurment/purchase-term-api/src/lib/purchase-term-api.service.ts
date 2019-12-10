import { Injectable } from '@angular/core';
import { PurchaseTermView } from './models/purchase-term-view.model';
import { Observable, Subject } from 'rxjs';
import { PurchaseTerm } from './models/purchase-term.model';
import { HttpClient } from '@angular/common/http';
import { PurchaseTermApiOptionsService } from './purchase-term-api-options.service';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { QueryString } from '@bionic/components/data-grid';
import { map } from 'rxjs/operators';

@Injectable()
export class PurchaseTermApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api`;
  private controller = 'procurments/purchaseterms';
  constructor(
    private httpClient: HttpClient,
    private purchaseTermApiOptions: PurchaseTermApiOptionsService
  ) {
    super();
    this.controller = this.purchaseTermApiOptions.apiUrl;
  }

  getPurchaseTermById(id: number): Observable<PurchaseTermView> {
    return this.httpClient.get<PurchaseTermView>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }

  getAllPurchaseTerms(id: number): Observable<PurchaseTermView[]> {
    return this.httpClient.get<PurchaseTermView[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  createPurchaseTerm(
    newPurchaseTerm: PurchaseTerm
  ): Observable<PurchaseTermView> {
    return this.httpClient.post<PurchaseTermView>(
      `${this.apiUrl}/${this.controller}`,
      newPurchaseTerm
    );
  }

  getVendorPurchseTerms(id: number): Observable<PurchaseTermView[]> {
    return this.httpClient.get<PurchaseTermView[]>(
      `${this.apiUrl}/procurments/vendors/${id}/purchase-terms`
    );
  }

  getItemPurchseTerms(id: number): Observable<PurchaseTermView[]> {
    return this.httpClient.get<PurchaseTermView[]>(
      `${this.apiUrl}/procurments/items/${id}/purchaseterms`
    );
  }

  updatePurchaseTerm(
    id: number,
    updatedPurchaseTerm: PurchaseTerm
  ): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${this.controller}/${id}`,
      updatedPurchaseTerm
    );
  }

  deletePurchaseTerm(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.apiUrl}/${this.controller}/${id}`
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
