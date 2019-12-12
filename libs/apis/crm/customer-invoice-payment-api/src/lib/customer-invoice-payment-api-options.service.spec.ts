import { TestBed } from '@angular/core/testing';

import { CustomerInvoicePaymentApiOptionsService } from './customer-invoice-payment-api-options.service';

describe('CustomerInvoicePaymentApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerInvoicePaymentApiOptionsService = TestBed.get(CustomerInvoicePaymentApiOptionsService);
    expect(service).toBeTruthy();
  });
});
