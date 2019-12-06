import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CriticalInventoryApiOptionsService {
  apiUrl = 'inventory/items/critical';

  constructor() {}
}
