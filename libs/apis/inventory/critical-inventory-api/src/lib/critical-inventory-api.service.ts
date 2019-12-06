import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CriticalInventoryApiOptionsService } from './critical-inventory-api-options.service';
import { Subject, Observable } from 'rxjs';

import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';
import { CriticalItemModel } from './models/critical-item.model';

@Injectable()
export class CriticalInventoryApiService extends Subject<
  DataStateChangeEventArgs
> {
  private controller = 'inventory/critical-items';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private httpClient: HttpClient,
    private criticalInventoryApiOptions: CriticalInventoryApiOptionsService
  ) {
    super();
    this.controller = this.criticalInventoryApiOptions.apiUrl;
  }

  getCriticalProductById(id: number): Observable<CriticalItemModel> {
    return this.httpClient.get<CriticalItemModel>(
      `${this.apiUrl}/${this.controller}/${id}/critical`
    );
  }

  executeProcured(state: QueryString): void {
    this.getProcuredData(state).subscribe(a => this.next(a));
  }

  getProcuredData(state: QueryString): Observable<DataStateChangeEventArgs> {
    return this.httpClient
      .post(`${this.apiUrl}/${this.controller}`, state)
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

  executeManufactured(state: QueryString): void {
    this.getManufacturedData(state).subscribe(a => this.next(a));
  }

  getManufacturedData(
    state: QueryString
  ): Observable<DataStateChangeEventArgs> {
    return this.httpClient
      .post(`${this.apiUrl}/${this.controller}/manufactured`, state)
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
