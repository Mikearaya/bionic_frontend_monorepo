import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerInvoiceApiOptionService {
  apiUrl = 'crm/customer-invoices';

  constructor() {}
}
