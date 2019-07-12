import { TestBed } from '@angular/core/testing';

import { PartnerPaymentsReportApiService } from './partner-payments-report-api.service';

describe('PartnerPaymentsReportApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartnerPaymentsReportApiService = TestBed.get(PartnerPaymentsReportApiService);
    expect(service).toBeTruthy();
  });
});
