import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemApiOptionsService {
  apiUrl = 'inventory/items';
  constructor() {}
}
