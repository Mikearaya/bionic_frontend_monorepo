import { TestBed } from '@angular/core/testing';

import { ProcurmentReportApiService } from './procurment-report-api.service';

describe('ProcurmentReportApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcurmentReportApiService = TestBed.get(ProcurmentReportApiService);
    expect(service).toBeTruthy();
  });
});
