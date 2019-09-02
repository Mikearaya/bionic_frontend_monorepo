import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockBatchApiOptionsService {
  apiUrl = 'inventory/stock-batchs';
  constructor() {}
}
