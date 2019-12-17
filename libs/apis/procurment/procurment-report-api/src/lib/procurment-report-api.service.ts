import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcurmentReportApiOptionsService } from './procurment-report-api-options.service';
import { Observable } from 'rxjs';
import { ProcurmentSummaryViewModel } from './models/procurment-summary-view.model';

@Injectable()
export class ProcurmentReportApiService {
  private controller = 'procurments/reports';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private httpClient: HttpClient,
    private procurmentApiOptions: ProcurmentReportApiOptionsService
  ) {
    this.controller = this.procurmentApiOptions.apiUrl;
  }

  getProcurmentSummary(): Observable<ProcurmentSummaryViewModel> {
    return this.httpClient.get<ProcurmentSummaryViewModel>(
      `${this.apiUrl}/${this.controller}/dashboard-summary`
    );
  }
}
