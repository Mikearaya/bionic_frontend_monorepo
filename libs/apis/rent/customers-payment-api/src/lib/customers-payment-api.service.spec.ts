import { TestBed } from '@angular/core/testing';

import { CustomersPaymentApiService } from './customers-payment-api.service';

describe('CustomersPaymentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersPaymentApiService = TestBed.get(CustomersPaymentApiService);
    expect(service).toBeTruthy();
  });
});
