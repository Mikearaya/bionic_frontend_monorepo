import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerViewModel } from './models/customer-view-model.model';
import { Observable, Subject } from 'rxjs';
import { Customer } from './models/customer.model';
import { map } from 'rxjs/operators';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { QueryString } from '@bionic/components/data-grid';
import { CustomerIndexModel } from './models/customer-index.model';

@Injectable()
export class CustomersApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/customers`;
  constructor(private httpClient: HttpClient) {
    super();
  }

  getCustomerById(id: number): Observable<CustomerViewModel> {
    return this.httpClient.get<CustomerViewModel>(`${this.apiUrl}/${id}`);
  }

  getCustomersList(filter: any): Observable<CustomerViewModel[]> {
    return this.httpClient.post<CustomerViewModel[]>(
      `${this.apiUrl}/filter`,
      filter
    );
  }

  addCustomer(customer: Customer): Observable<CustomerViewModel> {
    return this.httpClient.post<CustomerViewModel>(`${this.apiUrl}`, customer);
  }

  updateCustomer(customer: Customer): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${customer.Id}`, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  execute(state: QueryString): void {
    this.getData(state).subscribe(a => this.next(a));
  }

  getVehiclesIndex(): Observable<CustomerIndexModel[]> {
    return this.httpClient.get<CustomerIndexModel[]>(`${this.apiUrl}/index`);
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
