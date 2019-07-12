import { TestBed } from '@angular/core/testing';

import { RemainingCustomerPaymentApiService } from './remaining-customer-payment-api.service';

describe('RemainingCustomerPaymentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemainingCustomerPaymentApiService = TestBed.get(RemainingCustomerPaymentApiService);
    expect(service).toBeTruthy();
  });
});
