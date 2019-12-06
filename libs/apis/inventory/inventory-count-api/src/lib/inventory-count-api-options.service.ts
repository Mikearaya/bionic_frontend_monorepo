import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryCountApiOptionsService {
  apiUrl = 'inventory/items/count';

  constructor() {}
}
