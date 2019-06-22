import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { VehicleViewModel } from './models/vehicle-view-model.model';
import { Vehicle } from './models/vehicle.model';
import { map } from 'rxjs/operators';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { QueryString } from '@bionic/components/data-grid';

@Injectable()
export class VehiclesApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/vehicles`;
  private query = new QueryString();

  constructor(private httpClient: HttpClient) {
    super();
  }

  getVehicleById(id: number): Observable<VehicleViewModel> {
    return this.httpClient.get<VehicleViewModel>(`${this.apiUrl}/${id}`);
  }

  getVehicleList(filter: any): Observable<VehicleViewModel[]> {
    return this.httpClient.post<VehicleViewModel[]>(
      `${this.apiUrl}/filter`,
      filter
    );
  }

  addVehicle(vehicle: Vehicle): Observable<VehicleViewModel> {
    return this.httpClient.post<VehicleViewModel>(`${this.apiUrl}`, vehicle);
  }

  updateVehicle(vehicle: Vehicle): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${vehicle.Id}`, vehicle);
  }

  deleteVehicle(id: number): Observable<void> {
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
