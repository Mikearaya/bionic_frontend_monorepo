import { TestBed } from '@angular/core/testing';

import { CrmReportApiService } from './crm-report-api.service';

describe('CrmReportApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrmReportApiService = TestBed.get(CrmReportApiService);
    expect(service).toBeTruthy();
  });
});
