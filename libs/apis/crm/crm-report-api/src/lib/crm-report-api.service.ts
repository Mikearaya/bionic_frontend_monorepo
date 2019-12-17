import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardSummaryViewModel } from './models/crm-dashboard-summary.model';
import { CrmReportApiOptionsService } from './crm-report-api-options.service';

@Injectable()
export class CrmReportApiService {
  controller = 'crm/reports';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private httpClient: HttpClient,
    private crmReportApi: CrmReportApiOptionsService
  ) {
    this.controller = this.crmReportApi.apiUrl;
  }

  getDashboardSummary(): Observable<DashboardSummaryViewModel> {
    return this.httpClient.get<DashboardSummaryViewModel>(
      `${this.apiUrl}/${this.controller}/dashboard-summary`
    );
  }
}
