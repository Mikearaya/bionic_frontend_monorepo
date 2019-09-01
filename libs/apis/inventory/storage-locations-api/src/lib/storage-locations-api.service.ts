import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { StorageLocation } from './models/storage-location.model';
import { StorageLocationView } from './models/storage-location-view.model';
import { StorageLocationsApiOptionsService } from './storage-locations-api-options.service';
import { HttpClient } from '@angular/common/http';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';

import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';
import { StorageLocationIndex } from './models/storage-location-index.model';

@Injectable()
export class StorageLocationsApiService extends Subject<
  DataStateChangeEventArgs
> {
  private controller = 'storages';
  private apiUrl = `http://${window.location.hostname}:5000/api`;
  constructor(
    private storageLocationApiOptions: StorageLocationsApiOptionsService,
    private httpClient: HttpClient
  ) {
    super();
    this.controller = this.storageLocationApiOptions.apiUrl;
  }

  getStorageLocationsIndex(
    filter: string = ''
  ): Observable<StorageLocationIndex[]> {
    return this.httpClient.get<StorageLocationIndex[]>(
      `${this.apiUrl}/${this.controller}/index?Name=${filter}`
    );
  }

  getAllStorageLocations(): Observable<StorageLocationView[]> {
    return this.httpClient.get<StorageLocationView[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  getStorageLocationById(storageId: number): Observable<StorageLocationView> {
    return this.httpClient.get<StorageLocationView>(
      `${this.apiUrl}/${this.controller}/${storageId}`
    );
  }

  createStorageLocation(storage: StorageLocation): Observable<Boolean> {
    return this.httpClient.post<Boolean>(
      `${this.apiUrl}/${this.controller}`,
      storage
    );
  }

  updateStorageLocation(storage: StorageLocation): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${this.controller}/${storage.Id}`,
      storage
    );
  }

  deleteStorageLocation(storageId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.apiUrl}/${this.controller}/${storageId}`
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
