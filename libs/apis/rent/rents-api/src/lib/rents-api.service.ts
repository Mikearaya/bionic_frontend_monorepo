import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { VehicleRentView } from './models/vehicle-rent-view.model';
import { VehicleRent } from './models/vehicle-rent.model';
import { QueryString } from '@bionic/components/data-grid';
import { map } from 'rxjs/operators';
import {
  DataResult,
  DataStateChangeEventArgs
} from '@syncfusion/ej2-angular-grids';
import { HttpClient } from '@angular/common/http';
import { VehicleRentListModel } from './models/vehicle-rent-list.model';
import { RentContractModel } from './models/rent-contract.model';

@Injectable()
export class RentsApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/vehicle-rent`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getRentContract(id: number): Observable<RentContractModel> {
    return this.httpClient.get<RentContractModel>(
      `${this.apiUrl}/${id}/contract`
    );
  }
  getRentById(id: number): Observable<VehicleRentView> {
    return this.httpClient.get<VehicleRentView>(`${this.apiUrl}/${id}`);
  }

  getRentsList(): Observable<VehicleRentListModel[]> {
    return this.httpClient.get<VehicleRentListModel[]>(`${this.apiUrl}`);
  }

  addNewRent(rent: VehicleRent): Observable<VehicleRentView> {
    return this.httpClient.post<VehicleRentView>(`${this.apiUrl}`, rent);
  }

  updateRent(rent: VehicleRent): Observable<VehicleRentView> {
    return this.httpClient.put<VehicleRentView>(
      `${this.apiUrl}/${rent.Id}`,
      rent
    );
  }

  deleteRent(id: number): Observable<void> {
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
