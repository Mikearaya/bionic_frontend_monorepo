import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerInvoicePaymentApiOptionsService {
  apiUrl = 'crm-customer-orders';
  constructor() {}
}
