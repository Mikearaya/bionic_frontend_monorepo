import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleOwnerViewModel } from './models/vehicle-owner-view-model.model';
import { VehicleOwner } from './models/vehicle-owner.model';
import { VehicleOwnersIndex } from './models/vehicle-owners-index.model';

@Injectable()
export class VehicleOwnersApiService {
  private apiUrl = 'vehicle-owners';

  constructor(private httpClient: HttpClient) {}

  getVehicleOwnerById(id: number): Observable<VehicleOwnerViewModel> {
    return this.httpClient.get<VehicleOwnerViewModel>(`${this.apiUrl}/${id}`);
  }

  getVehicleOwnersIndex(): Observable<VehicleOwnersIndex> {
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
}
