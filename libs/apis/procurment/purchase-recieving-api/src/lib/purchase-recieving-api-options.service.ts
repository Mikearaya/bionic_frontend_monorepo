import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRecievingApiOptionsService {
  apiUrl = 'procurments/purchase-recievings';

  constructor() {}
}
