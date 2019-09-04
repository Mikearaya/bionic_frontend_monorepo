import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockMovementApiOptionsService } from './stock-movement-api-options.service';
import { Subject, Observable } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { StockBatchDetailView } from '@bionic/apis/inventory/stock-batch-api';

import { QueryString } from '@bionic/components/data-grid';
import { StockLotMovementModel } from './models/stock-batch-movement.model';

@Injectable()
export class StockMovementApiService extends Subject<DataStateChangeEventArgs> {
  private controller = 'inventory/stock-movement';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private httpClient: HttpClient,
    private stockMovementApiOptions: StockMovementApiOptionsService
  ) {
    super();
    this.controller = this.stockMovementApiOptions.apiUrl;
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

  moveStockLot(
    lotMovement: StockLotMovementModel
  ): Observable<StockBatchDetailView> {
    return this.httpClient.post<StockBatchDetailView>(
      `${this.apiUrl}/${this.controller}/movements`,
      lotMovement
    );
  }
}
