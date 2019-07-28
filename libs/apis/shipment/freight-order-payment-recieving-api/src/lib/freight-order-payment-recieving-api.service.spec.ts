import { TestBed } from '@angular/core/testing';

import { FreightOrderPaymentRecievingApiService } from './freight-order-payment-recieving-api.service';

describe('FreightOrderPaymentRecievingApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreightOrderPaymentRecievingApiService = TestBed.get(FreightOrderPaymentRecievingApiService);
    expect(service).toBeTruthy();
  });
});
