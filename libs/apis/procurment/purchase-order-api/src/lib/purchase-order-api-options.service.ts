import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderApiOptionsService {
  apiUrl = 'procurments/purchase-orders';

  constructor() {}
}
