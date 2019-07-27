import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { FreightOrderViewModel } from './models/freight-order-view.model';
import { FreightOrder } from './models/freight-order.model';

@Injectable({
  providedIn: 'root'
})
export class FreightOrderApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/freight-orders`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getFreightOrderById(id: number): Observable<FreightOrderViewModel> {
    return this.httpClient.get<FreightOrderViewModel>(`${this.apiUrl}/${id}`);
  }

  getFreightOrdersList(): Observable<FreightOrderViewModel[]> {
    return this.httpClient.get<FreightOrderViewModel[]>(`${this.apiUrl}`);
  }

  createFreightOrder(
    freightOrder: FreightOrder
  ): Observable<FreightOrderViewModel> {
    return this.httpClient.post<FreightOrderViewModel>(
      `${this.apiUrl}`,
      freightOrder
    );
  }

  updateFreightOrder(freightOrder: FreightOrder): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${freightOrder.Id}`,
      freightOrder
    );
  }

  deleteFreightOrder(id: number): Observable<void> {
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
