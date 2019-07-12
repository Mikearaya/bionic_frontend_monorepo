import { TestBed } from '@angular/core/testing';

import { CustomerPaymentsReportApiService } from './customer-payments-report-api.service';

describe('CustomerPaymentsReportApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerPaymentsReportApiService = TestBed.get(CustomerPaymentsReportApiService);
    expect(service).toBeTruthy();
  });
});
