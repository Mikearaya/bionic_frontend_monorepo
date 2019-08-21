import { Injectable } from '@angular/core';
import { PurchaseOrderView } from './models/purchase-order-view.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PurchaseOrderApiOptionsService } from './purchase-order-api-options.service';
import { PurchaseOrderDetailView } from './models/purchase-order-detail.model';
import { PurchaseOrder } from './models/purchase-order.model';
import { map } from 'rxjs/operators';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { QueryString } from '@bionic/components/data-grid';
import { PurchaseOrderIndex } from './models/purchase-order-index.model';
import { PurchaseOrderFilterModel } from './models/purchase-order-filter.model';

@Injectable()
export class PurchaseOrderApiService extends Subject<DataStateChangeEventArgs> {
  private controller = 'procurments/purchase-orders';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private purchaseOrderApiOptions: PurchaseOrderApiOptionsService,
    private httpClient: HttpClient
  ) {
    super();
    this.controller = this.purchaseOrderApiOptions.apiUrl;
  }

  getAllPurchaseOrders(): Observable<PurchaseOrderView[]> {
    return this.httpClient.get<PurchaseOrderView[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }
  getPurchaseOrdersIndex(
    filter: PurchaseOrderFilterModel
  ): Observable<PurchaseOrderIndex[]> {
    return this.httpClient.get<PurchaseOrderIndex[]>(
      `${this.apiUrl}/${this.controller}/index?id=${filter.Id}&type=${
        filter.Type
      }`
    );
  }

  getPurchaseOrderById(
    purchaseOrderId: number
  ): Observable<PurchaseOrderDetailView> {
    return this.httpClient.get<PurchaseOrderDetailView>(
      `${this.apiUrl}/${this.controller}/${purchaseOrderId}`
    );
  }

  getShippedPurchaseOrders(): Observable<PurchaseOrderView[]> {
    return this.httpClient.get<PurchaseOrderView[]>(
      `${this.apiUrl}/${this.controller}/shipped`
    );
  }
  createPurchaseOrder(
    purchaseOrder: PurchaseOrder
  ): Observable<PurchaseOrderDetailView> {
    return this.httpClient.post<PurchaseOrderDetailView>(
      `${this.apiUrl}/${this.controller}`,
      purchaseOrder
    );
  }

  createPurchaseQuotation(
    purchaseOrder: PurchaseOrder
  ): Observable<PurchaseOrderDetailView> {
    return this.httpClient.post<PurchaseOrderDetailView>(
      `${this.apiUrl}/${this.controller}/quotations`,
      purchaseOrder
    );
  }

  updatePurchaseOrder(purchaseOrder: PurchaseOrder): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${this.controller}/${purchaseOrder.Id}`,
      purchaseOrder
    );
  }

  deletePurchaseOrder(purchaseOrderId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.apiUrl}/${this.controller}/${purchaseOrderId}`
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
