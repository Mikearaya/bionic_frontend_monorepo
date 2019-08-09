import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseTermApiOptionsService {
  apiUrl = 'procurments/purchase-terms';
  constructor() {}
}
