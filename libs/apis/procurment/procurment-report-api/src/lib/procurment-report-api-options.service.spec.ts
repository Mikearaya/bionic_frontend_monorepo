import { TestBed } from '@angular/core/testing';

import { ProcurmentReportApiOptionsService } from './procurment-report-api-options.service';

describe('ProcurmentReportApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcurmentReportApiOptionsService = TestBed.get(ProcurmentReportApiOptionsService);
    expect(service).toBeTruthy();
  });
});
