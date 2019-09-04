import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipmentApiOptionsService {
  apiUrl = 'inventory/shipments';

  constructor() {}
}
