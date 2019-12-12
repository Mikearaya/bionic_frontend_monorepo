import { async, TestBed } from '@angular/core/testing';
import { CustomerInvoicePaymentModule } from './customer-invoice-payment.module';

describe('CustomerInvoicePaymentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerInvoicePaymentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerInvoicePaymentModule).toBeDefined();
  });
});
