import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleViewModel } from './models/vehicle-view-model.model';
import { Vehicle } from './models/vehicle.model';

@Injectable()
export class VehiclesApiService {
  private apiUrl = 'vehicles';

  constructor(private httpClient: HttpClient) {}

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
}
