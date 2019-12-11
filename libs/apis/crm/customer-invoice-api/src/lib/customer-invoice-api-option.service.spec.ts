import { TestBed } from '@angular/core/testing';

import { CustomerInvoiceApiOptionService } from './customer-invoice-api-option.service';

describe('CustomerInvoiceApiOptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerInvoiceApiOptionService = TestBed.get(CustomerInvoiceApiOptionService);
    expect(service).toBeTruthy();
  });
});
