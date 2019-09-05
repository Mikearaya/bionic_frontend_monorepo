import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiOptionsService {
  apiUrl = 'crm/customers';
  constructor() {}
}
