import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { HttpClient } from '@angular/common/http';
import { QueryString } from '@bionic/components/data-grid';
import { map } from 'rxjs/operators';

@Injectable()
export class RemainingPartnerPaymentApiService extends Subject<
  DataStateChangeEventArgs
> {
  private apiUrl = `http://${
    window.location.hostname
  }:5000/api/reports/remaining-partner-payments`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  execute(state: QueryString): void {
    this.getData(state).subscribe(a => this.next(a));
  }

  getData(state: QueryString): Observable<DataStateChangeEventArgs> {
    return this.httpClient
      .post(`${this.apiUrl}`, state)
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
