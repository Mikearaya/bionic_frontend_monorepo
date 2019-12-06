import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InventoryCountApiOptionsService } from './inventory-count-api-options.service';

@Injectable()
export class InventoryCountApiService extends Subject<
  DataStateChangeEventArgs
> {
  private controller = 'items/inventory';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private httpClient: HttpClient,
    private inventoryCountApiOptions: InventoryCountApiOptionsService
  ) {
    super();
    this.controller = this.inventoryCountApiOptions.apiUrl;
  }

  execute(state: QueryString): void {
    this.getData(state).subscribe(a => this.next(a));
  }

  getData(state: QueryString): Observable<DataStateChangeEventArgs> {
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
}
