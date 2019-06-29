import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { VehicleOwnerViewModel } from './models/vehicle-owner-view-model.model';
import { VehicleOwner } from './models/vehicle-owner.model';
import { VehicleOwnersIndex } from './models/vehicle-owners-index.model';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { QueryString } from '@bionic/components/data-grid';
import { map } from 'rxjs/operators';

@Injectable()
export class VehicleOwnersApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/vehicle-owners`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getVehicleOwnerById(id: number): Observable<VehicleOwnerViewModel> {
    return this.httpClient.get<VehicleOwnerViewModel>(`${this.apiUrl}/${id}`);
  }

  getVehicleOwnersIndex(name: string = ''): Observable<VehicleOwnersIndex> {
    return this.httpClient.get<VehicleOwnersIndex>(`${this.apiUrl}/index`);
  }

  getVehicleOwnersList(filter: any): Observable<VehicleOwnerViewModel[]> {
    return this.httpClient.post<VehicleOwnerViewModel[]>(
      `${this.apiUrl}/filter`,
      filter
    );
  }

  addVehicleOwner(owner: VehicleOwner): Observable<VehicleOwnerViewModel> {
    return this.httpClient.post<VehicleOwnerViewModel>(`${this.apiUrl}`, owner);
  }

  updateVehicleOwner(owner: VehicleOwner): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${owner.Id}`, owner);
  }

  deleteVehicleOwner(id: number): Observable<void> {
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
