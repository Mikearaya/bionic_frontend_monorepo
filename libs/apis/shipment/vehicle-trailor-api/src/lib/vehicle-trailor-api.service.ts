import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VehicleTrailorView } from './models/vehicle-trailor-view.model';
import { VehicleTrailor } from './models/vehicle-tailor.model';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { VehicleTrailorIndex } from './models/vehicle-trailor-index.model';

@Injectable()
export class VehicleTrailorApiService extends Subject<
  DataStateChangeEventArgs
> {
  private apiUrl = `http://${window.location.hostname}:5000/api/trailors`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getVehicleTrailorById(id: number): Observable<VehicleTrailorView> {
    return this.httpClient.get<VehicleTrailorView>(`${this.apiUrl}/${id}`);
  }

  getVehicleTrailorsList(): Observable<VehicleTrailorView[]> {
    return this.httpClient.get<VehicleTrailorView[]>(`${this.apiUrl}`);
  }

  createVehicleTrailor(
    vehicleTrailor: VehicleTrailor
  ): Observable<VehicleTrailorView> {
    return this.httpClient.post<VehicleTrailorView>(
      `${this.apiUrl}`,
      vehicleTrailor
    );
  }

  updateVehicleTrailor(vehicleTrailor: VehicleTrailor): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${vehicleTrailor.Id}`,
      vehicleTrailor
    );
  }

  deleteVehicleTrailor(id: number): Observable<void> {
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

  getVehicleTrailorsIndex(
    filterString: string = ''
  ): Observable<VehicleTrailorIndex[]> {
    return this.httpClient.get<VehicleTrailorIndex[]>(
      `${this.apiUrl}/index?searchString=${filterString}`
    );
  }
}
