import { Injectable } from '@angular/core';
import { ShipmentSummaryView } from './models/shipment-summary-view.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShipmentApiOptionsService } from './shipment-api-options.service';
import { ShipmentView, Shipment, ShipmentViewDetail } from '..';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';

import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';

@Injectable()
export class ShipmentApiService extends Subject<DataStateChangeEventArgs> {
  private controller = 'shipments';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private httpClient: HttpClient,
    private shipmentApiOptions: ShipmentApiOptionsService
  ) {
    super();
    this.controller = this.shipmentApiOptions.apiUrl;
  }

  getAllShipmentSummary(): Observable<ShipmentSummaryView[]> {
    return this.httpClient.get<ShipmentSummaryView[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  getShipmentById(shipmentId: number): Observable<ShipmentView> {
    return this.httpClient.get<ShipmentView>(
      `${this.apiUrl}/${this.controller}/${shipmentId}`
    );
  }

  createNewShipment(newShipment: Shipment): Observable<Shipment> {
    return this.httpClient.post<Shipment>(
      `${this.apiUrl}/${this.controller}/salesorders/${
        newShipment.CustomerOrderId
      }`,
      newShipment
    );
  }

  deleteShipment(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }

  getCustomerOrderShipments(
    customerOrderId: number
  ): Observable<ShipmentViewDetail[]> {
    return this.httpClient.get<ShipmentViewDetail[]>(
      `${this.apiUrl}/${this.controller}/salesorders/${customerOrderId}`
    );
  }

  pickAllShipmentItems(shipmentId: number): Observable<Shipment> {
    return this.httpClient.put<Shipment>(
      `${this.apiUrl}/${this.controller}/pickings/${shipmentId}`,
      {}
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
