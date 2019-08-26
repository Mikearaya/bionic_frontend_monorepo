import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import {
  DataStateChangeEventArgs,
  Sorts,
  DataResult
} from '@syncfusion/ej2-grids';
import { QueryString } from '@bionic/components/data-grid';
import { HttpClient } from '@angular/common/http';
import { LookupViewModel } from './models/system-lookup-view.model';
import { LookupModel } from './models/system-lookup.model';
import { catchError, map } from 'rxjs/operators';
import { LookupsIndexModel } from './models/system-lookup-index.model';
import { SystemLookupCategoriesModel } from './models/system-lookup-category.model';

@Injectable()
export class SystemLookupApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/system-lookups`;
  private query = new QueryString();

  constructor(private httpClient: HttpClient) {
    super();
  }

  createLookup(newLookup: LookupModel[]): Observable<LookupViewModel> {
    return this.httpClient
      .post<LookupViewModel>(`${this.apiUrl}`, { Lookups: newLookup })
      .pipe(catchError(this.handleError));
  }

  getLookupId(id: number): Observable<LookupViewModel> {
    return this.httpClient.get<LookupViewModel>(`${this.apiUrl}/${id}`);
  }

  getLookupIndex(
    type: string,
    searchString: string = ''
  ): Observable<LookupsIndexModel[]> {
    return this.httpClient.get<LookupsIndexModel[]>(
      `${this.apiUrl}?type=${type}&searchString=${searchString}`
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

  getLookups(searchString: string = ''): Observable<LookupViewModel[]> {
    return this.httpClient.get<LookupViewModel[]>(
      `${this.apiUrl}?${searchString}`
    );
  }

  getLookUpType(type: string): Observable<LookupsIndexModel[]> {
    return this.httpClient.get<LookupsIndexModel[]>(
      `${this.apiUrl}/type?type=${type}`
    );
  }

  getSystemLookupCategories(): Observable<SystemLookupCategoriesModel[]> {
    return this.httpClient.get<SystemLookupCategoriesModel[]>(
      `${this.apiUrl}/categories`
    );
  }

  updateLookup(updatedLookup: LookupModel[]): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}`, updatedLookup);
  }

  deleteLookup(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  private handleError(error: Response | any) {
    console.log(error);
    return of(error);
  }
}
