import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemApiOptionsService } from './item-api-options.service';
import { Observable, Subject } from 'rxjs';
import { CriticalItemModel } from './models/critical-item.model';
import { VendorItemViewModel } from './models/vendor-item.model';
import { ItemView } from './models/item-view.model';
import { ItemReportModel } from './models/item-report.model';

import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { ItemIndexModel } from './models/item-index.model';
import { QueryString } from '@bionic/components/data-grid';
import { ItemModel } from './models/item.model';

@Injectable()
export class ItemApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  private controller = 'inventory/items';

  constructor(
    private httpClient: HttpClient,
    private itemApiOptions: ItemApiOptionsService
  ) {
    super();
    this.controller = this.itemApiOptions.apiUrl;
  }

  getLowInventoryItems(): Observable<CriticalItemModel[]> {
    return this.httpClient.get<CriticalItemModel[]>(
      `${this.apiUrl}/${this.controller}/critical?type=purchased`
    );
  }

  getVendorItems(vendorId: number): Observable<VendorItemViewModel[]> {
    return this.httpClient.get<VendorItemViewModel[]>(
      `${this.apiUrl}/${this.controller}/vendors/${vendorId}`
    );
  }

  getItemById(itemId: number): Observable<ItemView> {
    return this.httpClient.get<ItemView>(
      `${this.apiUrl}/${this.controller}/${itemId}`
    );
  }

  getItemsIndex(
    searchString: string = '',
    vendorId: number
  ): Observable<ItemIndexModel[]> {
    return this.httpClient.get<ItemIndexModel[]>(
      `${this.apiUrl}/${
        this.controller
      }/index?searchstring=${searchString}&vendorId=${vendorId}`
    );
  }

  getItemReport(): Observable<ItemReportModel[]> {
    return this.httpClient.get<ItemReportModel[]>(
      `${this.apiUrl}/${this.controller}/reports`
    );
  }

  getAllItems(): Observable<ItemView[]> {
    return this.httpClient.get<ItemView[]>(`${this.apiUrl}/${this.controller}`);
  }

  ItemCodeUnique(code: string): Observable<boolean> {
    return this.httpClient.get<boolean>(
      `${this.apiUrl}/${this.controller}/${code}/unique`
    );
  }

  getCriticalProductById(id: number): Observable<CriticalItemModel> {
    return this.httpClient.get<CriticalItemModel>(
      `${this.apiUrl}/${this.controller}/${id}/critical`
    );
  }

  getAllCriticalProduct(): Observable<CriticalItemModel[]> {
    return this.httpClient.get<CriticalItemModel[]>(
      `${this.apiUrl}/${this.controller}/critical?type=purchased`
    );
  }

  saveItem(item: ItemModel): Observable<ItemModel> {
    return this.httpClient.post<ItemModel>(
      `${this.apiUrl}/${this.controller}`,
      item
    );
  }

  updateItem(updatedItem: ItemModel): Observable<Boolean> {
    return this.httpClient.put<Boolean>(
      `${this.apiUrl}/${this.controller}/${updatedItem.id}`,
      updatedItem
    );
  }

  deleteItemById(itemId: number): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(
      `${this.apiUrl}/${this.controller}/${itemId}`
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
