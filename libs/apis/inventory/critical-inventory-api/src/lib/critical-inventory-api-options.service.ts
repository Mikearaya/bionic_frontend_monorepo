import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CriticalInventoryApiOptionsService {
  apiUrl = 'inventory/critical-items';

  constructor() {}
}
