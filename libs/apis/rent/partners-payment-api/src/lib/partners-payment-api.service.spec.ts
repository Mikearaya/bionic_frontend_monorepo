import { TestBed } from '@angular/core/testing';

import { PartnersPaymentApiService } from './partners-payment-api.service';

describe('PartnersPaymentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartnersPaymentApiService = TestBed.get(PartnersPaymentApiService);
    expect(service).toBeTruthy();
  });
});
