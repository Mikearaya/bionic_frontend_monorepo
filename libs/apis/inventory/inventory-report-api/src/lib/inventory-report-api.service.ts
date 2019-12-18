import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InventoryReportApiOptionsService } from './inventory-report-api-options.service';
import { Observable } from 'rxjs';
import { InventoryDashboardView } from './models/inventory-dashboard-view.model';

@Injectable()
export class InventoryReportApiService {
  private apiUrl = `http://${window.location.hostname}:5000/api`;
  private controller = 'inventory/items';

  constructor(
    private httpClient: HttpClient,
    private inventoryReportApiOption: InventoryReportApiOptionsService
  ) {
    this.controller = this.inventoryReportApiOption.apiUrl;
  }

  getInventoryDashboardSummary(): Observable<InventoryDashboardView> {
    return this.httpClient.get<InventoryDashboardView>(
      `${this.apiUrl}/${this.controller}/dashboard-summary`
    );
  }
}
