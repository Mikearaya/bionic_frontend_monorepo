import { Injectable } from '@angular/core';
import { WriteOffsApiOptionsService } from './write-offs-api-options.service';
import { WriteOffListModel } from './models/write-off-list.model';
import { Observable, Subject } from 'rxjs';
import { WriteOffDetailModel } from './models/write-off-detail-view.model';
import { NewWriteOffModel } from './models/new-write-off.model';
import { UpdatedWriteOffModel } from './models/updated-write-off.model';
import { HttpClient } from '@angular/common/http';

import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';

import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';

@Injectable()
export class WriteOffsApiService extends Subject<DataStateChangeEventArgs> {
  private controller = 'inventory/write-offs';
  private apiUrl = `http://${window.location.hostname}:5000/api`;
  constructor(
    private writeOffApiOptions: WriteOffsApiOptionsService,
    private httpClient: HttpClient
  ) {
    super();
    this.controller = this.writeOffApiOptions.apiUrl;
  }

  getAllWriteOffs(): Observable<WriteOffListModel[]> {
    return this.httpClient.get<WriteOffListModel[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  getWriteOffById(id: number): Observable<WriteOffDetailModel> {
    return this.httpClient.get<WriteOffDetailModel>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }

  getItemkWriteOffById(itemId: number): Observable<WriteOffListModel[]> {
    return this.httpClient.get<WriteOffListModel[]>(
      `${this.apiUrl}/${this.controller}/item/${itemId}`
    );
  }

  createWriteOff(
    newWriteOff: NewWriteOffModel
  ): Observable<WriteOffDetailModel> {
    return this.httpClient.post<WriteOffDetailModel>(
      `${this.apiUrl}/${this.controller}`,
      newWriteOff
    );
  }

  updateWriteOff(updatedWriteOff: UpdatedWriteOffModel): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${this.controller}/${updatedWriteOff.Id}`,
      updatedWriteOff
    );
  }

  deleteWriteOff(id: number): Observable<void> {
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
}
