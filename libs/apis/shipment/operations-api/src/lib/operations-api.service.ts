import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { OperationViewModel } from './models/operation-view.model';
import { OperationModel } from './models/operation.model';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { QueryString } from '@bionic/components/data-grid';
import { map } from 'rxjs/operators';
import { OperationsDetailViewModel } from './models/operation-detail-view.model';
import { OperationIndex } from './models/operation-index.model';

@Injectable()
export class OperationsApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/operations`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getOperationById(id: number): Observable<OperationsDetailViewModel> {
    return this.httpClient.get<OperationsDetailViewModel>(
      `${this.apiUrl}/${id}`
    );
  }

  getOperationIndex(filterString: string = ''): Observable<OperationIndex[]> {
    return this.httpClient.get<OperationIndex[]>(
      `${this.apiUrl}/index?Name=${filterString}`
    );
  }

  getOperationsList(): Observable<OperationViewModel[]> {
    return this.httpClient.get<OperationViewModel[]>(`${this.apiUrl}`);
  }

  createOperation(operation: OperationModel): Observable<OperationViewModel> {
    return this.httpClient.post<OperationViewModel>(
      `${this.apiUrl}`,
      operation
    );
  }

  updateOperation(operation: OperationModel): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${operation.Id}`,
      operation
    );
  }

  deleteOperation(id: number): Observable<void> {
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
