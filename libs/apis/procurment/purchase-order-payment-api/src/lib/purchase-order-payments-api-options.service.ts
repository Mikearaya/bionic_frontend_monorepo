import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderPaymentsApiOptionsService {
  apiUrl = 'procurments/purchase-order-payments';

  constructor() {}
}
