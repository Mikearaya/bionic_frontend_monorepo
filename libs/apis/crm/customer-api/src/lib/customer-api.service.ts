import { Injectable } from '@angular/core';
import { CustomerApiOptionsService } from './customer-api-options.service';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';
import { Observable, Subject } from 'rxjs';
import { Customer } from './models/customer.model';
import { HttpClient } from '@angular/common/http';
import { CustomerIndex } from './models/customer-index.model';

@Injectable()
export class CustomerApiService extends Subject<DataStateChangeEventArgs> {
  private controller = 'crm/customers';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private customerApiOptions: CustomerApiOptionsService,
    private httpClient: HttpClient
  ) {
    super();
    this.controller = this.customerApiOptions.apiUrl;
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(
      `${this.apiUrl}/${this.controller}/${id}`
    );
  }

  getCustomersIndex(filter: string = ''): Observable<CustomerIndex[]> {
    return this.httpClient.get<CustomerIndex[]>(
      `${this.apiUrl}/${this.controller}/index?name=${filter}`
    );
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.apiUrl}/${this.controller}`);
  }

  addCustomer(newCustomer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(
      `${this.apiUrl}/${this.controller}`,
      newCustomer
    );
  }
  updateCustomer(updatedCustomer: Customer): Observable<Boolean> {
    return this.httpClient.put<Boolean>(
      `${this.apiUrl}/${this.controller}/${updatedCustomer.Id}`,
      updatedCustomer
    );
  }

  deleteCustomer(customerId: number): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(
      `${this.apiUrl}/${this.controller}/${customerId}`
    );
  }

  deleteCustomerAddress(
    customerId: number,
    addressId: number
  ): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(
      `${this.apiUrl}/${this.controller}/${customerId}/address/${addressId}`
    );
  }

  deleteCustomerPhone(
    customerId: number,
    phoneId: number
  ): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(
      `${this.apiUrl}/${this.controller}/${customerId}/phonenumber/${phoneId}`
    );
  }

  deleteCustomerSocialMediaAddress(
    customerId: number,
    socialId: number
  ): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(
      `${this.apiUrl}/${this.controller}/${customerId}/socialmedia/${socialId}`
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
