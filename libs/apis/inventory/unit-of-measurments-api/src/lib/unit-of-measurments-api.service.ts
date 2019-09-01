import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UnitOfMeasurmentView } from './models/unit-of-measurment-view.model';
import { UnitOfMeasurement } from './models/unit-of-measurment.model';
import { UnitOfMeasurmentsApiOptionsService } from './unit-of-measurments-api-options.service';

import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';

import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';
import { UnitOfMeasurmentIndex } from './models/unit-of-measurment-index.model';

@Injectable()
export class UnitOfMeasurmentsApiService extends Subject<
  DataStateChangeEventArgs
> {
  private controller = 'products/uom';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private httpClient: HttpClient,
    private unitOfMeasureApiOption: UnitOfMeasurmentsApiOptionsService
  ) {
    super();
    this.controller = this.unitOfMeasureApiOption.apiUrl;
  }

  getUnitOfMeasurmentsIndex(
    filter: string = ''
  ): Observable<UnitOfMeasurmentIndex[]> {
    return this.httpClient.get<UnitOfMeasurmentIndex[]>(
      `${this.apiUrl}/${this.controller}/index?Name=${filter}`
    );
  }
  getAllUnitOfMeasures(): Observable<UnitOfMeasurmentView[]> {
    return this.httpClient.get<UnitOfMeasurmentView[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  getAllUnitOfMeasureById(uomId: number): Observable<UnitOfMeasurmentView> {
    return this.httpClient.get<UnitOfMeasurmentView>(
      `${this.apiUrl}/${this.controller}/${uomId}`
    );
  }

  saveUnitOfMeasurment(
    uom: UnitOfMeasurement
  ): Observable<UnitOfMeasurmentView> {
    return this.httpClient.post<UnitOfMeasurmentView>(
      `${this.apiUrl}/${this.controller}`,
      uom
    );
  }

  updateUnitOfMeasurment(uom: UnitOfMeasurement): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${this.controller}/${uom.Id}`,
      uom
    );
  }

  deleteUnitOfMeasurment(uomId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.apiUrl}/${this.controller}/${uomId}`
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
