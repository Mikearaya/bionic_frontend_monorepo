import { Injectable } from '@angular/core';
import { DistanceViewModel } from './models/distance-view.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DistanceModel, DistancetDtoModel } from './models/distance.model';

@Injectable({
  providedIn: 'root'
})
export class DistanceApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/distances`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getDistanceById(id: number): Observable<DistanceViewModel> {
    return this.httpClient.get<DistanceViewModel>(`${this.apiUrl}/${id}`);
  }

  getDistancesList(): Observable<DistanceViewModel[]> {
    return this.httpClient.get<DistanceViewModel[]>(`${this.apiUrl}`);
  }

  createDistance(distance: DistancetDtoModel): Observable<DistanceViewModel> {
    return this.httpClient.post<DistanceViewModel>(`${this.apiUrl}`, distance);
  }

  updateDistance(distance: DistanceModel): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${distance.Id}`, distance);
  }

  deleteDistance(id: number): Observable<void> {
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
