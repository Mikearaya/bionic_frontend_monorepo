import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorApiOptionsService {
  apiUrl = 'procurments/vendors';

  constructor() {}
}
