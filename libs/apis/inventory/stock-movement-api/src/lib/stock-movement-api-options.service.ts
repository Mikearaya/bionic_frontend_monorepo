import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockMovementApiOptionsService {
  apiUrl = 'inventory/stock-movement';

  constructor() {}
}
