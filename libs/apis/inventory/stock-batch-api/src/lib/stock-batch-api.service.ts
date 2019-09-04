import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { StockBatchDetailView } from './models/stock-batch-detail-view.model';
import { StockBatchListView } from './models/stock-batch-view.model';
import { StockBatchStorageView } from './models/stock-batch-storage-view.model';
import { NewStockBatchModel } from './models/new-stock-batch.model';
import { UpdatedStockBatchModel } from './models/updated-stock-batch.model';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';

import { QueryString } from '@bionic/components/data-grid';
import { StockBatchApiOptionsService } from './stock-batch-api-options.service';
import { StockBatchIndex } from './models/stock-batch-index.model';

@Injectable()
export class StockBatchApiService extends Subject<DataStateChangeEventArgs> {
  private controller = 'inventory/stock-lots';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private httpClient: HttpClient,
    private stockBatchApiOptions: StockBatchApiOptionsService
  ) {
    super();
    this.controller = this.stockBatchApiOptions.apiUrl;
  }

  getStockBatchById(id: number): Observable<StockBatchDetailView> {
    return this.httpClient.get<StockBatchDetailView>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }

  getItemStockBatchById(itemId: number): Observable<StockBatchListView[]> {
    return this.httpClient.get<StockBatchListView[]>(
      `${this.apiUrl}/${this.controller}/items/${itemId}`
    );
  }

  getAllStockBatchs(): Observable<StockBatchListView[]> {
    return this.httpClient.get<StockBatchListView[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  getStockLotStorages(lotId: number): Observable<StockBatchStorageView[]> {
    return this.httpClient.get<StockBatchStorageView[]>(
      `${this.apiUrl}/${this.controller}/${lotId}/storages`
    );
  }

  createNewStockBatch(
    newBatch: NewStockBatchModel
  ): Observable<StockBatchDetailView> {
    return this.httpClient.post<StockBatchDetailView>(
      `${this.apiUrl}/${this.controller}`,
      newBatch
    );
  }

  updateStockBatch(updatedBatch: UpdatedStockBatchModel): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${this.controller}/${updatedBatch.Id}`,
      updatedBatch
    );
  }

  deleteStockBatch(id: number): Observable<void> {
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

  getBatchsIndex(
    filter: string = '',
    itemId: number = null
  ): Observable<StockBatchIndex[]> {
    return this.httpClient.get<StockBatchIndex[]>(
      `${this.apiUrl}/${this.controller}/index?name=${filter}&itemId=${itemId}`
    );
  }
}
