import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerViewModel } from './models/customer-view-model.model';
import { Observable } from 'rxjs';
import { Customer } from './models/customer.model';

@Injectable()
export class CustomersApiService {
  private apiUrl = 'customers';
  constructor(private httpClient: HttpClient) {}

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
}
