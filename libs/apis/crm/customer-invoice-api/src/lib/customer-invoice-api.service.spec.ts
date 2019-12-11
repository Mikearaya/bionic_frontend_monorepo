import { TestBed } from '@angular/core/testing';

import { CustomerInvoiceApiService } from './customer-invoice-api.service';

describe('CustomerInvoiceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerInvoiceApiService = TestBed.get(CustomerInvoiceApiService);
    expect(service).toBeTruthy();
  });
});
