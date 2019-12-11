import { async, TestBed } from '@angular/core/testing';
import { CustomerInvoiceApiModule } from './customer-invoice-api.module';

describe('CustomerInvoiceApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerInvoiceApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerInvoiceApiModule).toBeDefined();
  });
});
