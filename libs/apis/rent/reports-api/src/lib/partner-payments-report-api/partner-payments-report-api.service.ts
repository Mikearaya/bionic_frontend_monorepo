import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { Observable, Subject } from 'rxjs';
import { QueryString } from '@bionic/components/data-grid';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartnerPaymentsReportApiService extends Subject<
  DataStateChangeEventArgs
> {
  private apiUrl = `http://${
    window.location.hostname
  }:5000/api/reports/partner-payments-history`;
  private query = new QueryString();
  constructor(private httpClient: HttpClient) {
    super();
  }

  execute(state: DataStateChangeEventArgs): void {
    this.getData(state).subscribe(a => this.next(a));
  }

  getData(
    state: DataStateChangeEventArgs
  ): Observable<DataStateChangeEventArgs> {
    if (state.action) {
      if (state.action.requestType === 'filtering') {
      }

      switch (state.action.requestType) {
        case 'sorting':
          this.query.sortBy = state.action['columnName'];
          this.query.sortDirection = state.action['direction'];
          break;
        case 'filtering':
          this.query.filter = [];

          state.action['columns'].forEach(element => {
            this.query.filter.push({
              propertyName: element.field,
              operation: element.operator,
              value: element.value
            });
          });

          break;
        case 'searching':
          this.query.searchString = state.action['searchString'];

          break;
      }
    }

    this.query.pageSize = state.take;
    this.query.pageNumber = state.skip;

    return this.httpClient
      .post(`${this.apiUrl}`, this.query)
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
