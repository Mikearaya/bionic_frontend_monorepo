import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderApiOptionsService {
  apiUrl = 'crm-customer-orders';
  constructor() {}
}
