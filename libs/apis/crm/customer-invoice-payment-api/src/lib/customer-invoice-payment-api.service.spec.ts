import { TestBed } from '@angular/core/testing';

import { CustomerInvoicePaymentApiService } from './customer-invoice-payment-api.service';

describe('CustomerInvoicePaymentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerInvoicePaymentApiService = TestBed.get(CustomerInvoicePaymentApiService);
    expect(service).toBeTruthy();
  });
});
