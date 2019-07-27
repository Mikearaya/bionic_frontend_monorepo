import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { LocationViewModel } from './models/location-view.model';
import { LocationModel, LocationModelDto } from './models/location.model';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { LocationIndexModel } from './models/location-index.model';
@Injectable()
export class LocationApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/locations`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getLocationById(id: number): Observable<LocationViewModel> {
    return this.httpClient.get<LocationViewModel>(`${this.apiUrl}/${id}`);
  }

  getLocationsList(): Observable<LocationViewModel[]> {
    return this.httpClient.get<LocationViewModel[]>(`${this.apiUrl}`);
  }

  createLocation(location: LocationModelDto): Observable<LocationViewModel> {
    return this.httpClient.post<LocationViewModel>(`${this.apiUrl}`, location);
  }

  updateLocation(location: LocationModelDto): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}`, location);
  }

  deleteLocation(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  getLocationIndex(
    filterString: string = ''
  ): Observable<LocationIndexModel[]> {
    return this.httpClient.get<LocationIndexModel[]>(
      `${this.apiUrl}/index?searchString=${filterString}`
    );
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
