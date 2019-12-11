import { async, TestBed } from '@angular/core/testing';
import { CustomerInvoiceModule } from './customer-invoice.module';

describe('CustomerInvoiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerInvoiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerInvoiceModule).toBeDefined();
  });
});
