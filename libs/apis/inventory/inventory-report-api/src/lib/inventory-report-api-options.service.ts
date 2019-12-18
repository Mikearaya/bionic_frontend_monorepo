import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryReportApiOptionsService {
  apiUrl = 'inventory/reports';
  constructor() {}
}
