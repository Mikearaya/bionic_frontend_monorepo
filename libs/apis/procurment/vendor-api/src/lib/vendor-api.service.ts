import { Injectable } from '@angular/core';
import { Vendor } from './models/vendor.model';
import { Observable, Subject } from 'rxjs';
import { VendorViewModel } from './models/vendor-view.model';
import { HttpClient } from '@angular/common/http';
import { VendorApiOptionsService } from './vendor-api-options.service';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { VendorIndex } from './models/vendor-index.model';

@Injectable()
export class VendorApiService extends Subject<DataStateChangeEventArgs> {
  private controller = 'procurments/vendors';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private vendorApiOption: VendorApiOptionsService,
    private httpClient: HttpClient
  ) {
    super();
    this.controller = this.vendorApiOption.apiUrl;
  }

  getAllVendors(): Observable<VendorViewModel[]> {
    return this.httpClient.get<VendorViewModel[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  getVendorIndex(searchString: string): Observable<VendorIndex[]> {
    return this.httpClient.get<VendorIndex[]>(
      `${this.apiUrl}/${this.controller}/index?name=${searchString}`
    );
  }

  getVendorById(id: number): Observable<VendorViewModel> {
    return this.httpClient.get<VendorViewModel>(
      `${this.apiUrl}/${this.controller}/${id}`
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

  /*   getVendorPurchseTerms(id: number): Observable<PurchaseTermViewModel[]> {
    return this.httpClient.get<PurchaseTermViewModel[]>(
      `${this.apiUrl}/${this.controller}/${id}/purchaseterms`
    );
  } */
  /*
  getVendorItemPurchseTerms(
    id: number,
    itemId: number
  ): Observable<PurchaseTermViewModel[]> {
    return this.httpClient.get<PurchaseTermViewModel[]>(
      `${this.apiUrl}/${this.controller}/${id}/items/${itemId}/purchaseterms`
    );
  } */

  createVendor(newVendor: Vendor): Observable<VendorViewModel> {
    return this.httpClient.post<VendorViewModel>(
      `${this.apiUrl}/${this.controller}`,
      newVendor
    );
  }

  updateVendor(updatedVendor: Vendor): Observable<Boolean> {
    return this.httpClient.put<Boolean>(
      `${this.apiUrl}/${this.controller}/${updatedVendor.Id}`,
      updatedVendor
    );
  }

  deleteVendor(id: number): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }
}
