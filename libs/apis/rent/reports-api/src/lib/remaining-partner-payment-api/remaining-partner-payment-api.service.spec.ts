import { TestBed } from '@angular/core/testing';

import { RemainingPartnerPaymentApiService } from './remaining-partner-payment-api.service';

describe('RemainingPartnerPaymentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemainingPartnerPaymentApiService = TestBed.get(RemainingPartnerPaymentApiService);
    expect(service).toBeTruthy();
  });
});
