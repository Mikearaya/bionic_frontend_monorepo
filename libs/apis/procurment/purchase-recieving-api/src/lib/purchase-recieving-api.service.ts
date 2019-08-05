import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { QueryString } from '@bionic/components/data-grid';
import { Subject, Observable } from 'rxjs';
import { PurchaseRecievingApiOptionsService } from './purchase-recieving-api-options.service';
import { HttpClient } from '@angular/common/http';
import { PurchaseRecievingIndex } from './models/purchase-recievig-index.model';
import { PurchaseRecievingModel } from './models/purchase-recieving.model';
import { PurchaseOrderDetailView } from '@bionic/apis/procurment/purchase-order-api';

@Injectable()
export class PurchaseRecievingApiService extends Subject<
  DataStateChangeEventArgs
> {
  private controller = 'procurments/purchase-recievings';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private purchaseOrderApiOptions: PurchaseRecievingApiOptionsService,
    private httpClient: HttpClient
  ) {
    super();
    this.controller = this.purchaseOrderApiOptions.apiUrl;
  }

  getPurchaseOrdersIndex(
    searchString: string
  ): Observable<PurchaseRecievingIndex[]> {
    return this.httpClient.get<PurchaseRecievingIndex[]>(
      `${this.apiUrl}/${this.controller}/index?searchString=${searchString}`
    );
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

  addNewPurchaseRecieving(
    purchaseRecieving: PurchaseRecievingModel
  ): Observable<PurchaseOrderDetailView> {
    return this.httpClient.post<PurchaseOrderDetailView>(
      `${this.apiUrl}/procurments/purchase-recievings`,
      purchaseRecieving
    );
  }
}
