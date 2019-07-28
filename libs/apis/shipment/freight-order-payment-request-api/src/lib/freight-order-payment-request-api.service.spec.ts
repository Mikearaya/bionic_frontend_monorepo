import { TestBed } from '@angular/core/testing';

import { FreightOrderPaymentRequestApiService } from './freight-order-payment-request-api.service';

describe('FreightOrderPaymentRequestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreightOrderPaymentRequestApiService = TestBed.get(FreightOrderPaymentRequestApiService);
    expect(service).toBeTruthy();
  });
});
