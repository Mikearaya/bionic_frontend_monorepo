import { TestBed } from '@angular/core/testing';

import { CrmReportApiOptionsService } from './crm-report-api-options.service';

describe('CrmReportApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrmReportApiOptionsService = TestBed.get(CrmReportApiOptionsService);
    expect(service).toBeTruthy();
  });
});
