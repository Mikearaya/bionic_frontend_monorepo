import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { DriversViewModel } from './models/drivers-view.model';
import { DriverModel } from './models/drivers.model';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DriversIndexModel } from './models/drivers-index.model';

@Injectable()
export class DriversApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/drivers`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getDriverById(id: number): Observable<DriversViewModel> {
    return this.httpClient.get<DriversViewModel>(`${this.apiUrl}/${id}`);
  }

  getDriversList(): Observable<DriversViewModel[]> {
    return this.httpClient.get<DriversViewModel[]>(`${this.apiUrl}`);
  }

  createDriver(driver: DriverModel): Observable<DriversViewModel> {
    return this.httpClient.post<DriversViewModel>(`${this.apiUrl}`, driver);
  }

  updateDriver(driver: DriverModel): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${driver.Id}`, driver);
  }

  deleteDriver(id: number): Observable<void> {
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

  getDriversIndex(filterString: string = ''): Observable<DriversIndexModel[]> {
    return this.httpClient.get<DriversIndexModel[]>(
      `${this.apiUrl}/index?searchString=${filterString}`
    );
  }
}
