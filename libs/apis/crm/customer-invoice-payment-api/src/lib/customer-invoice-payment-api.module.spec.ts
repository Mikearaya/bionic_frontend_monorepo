import { async, TestBed } from '@angular/core/testing';
import { CustomerInvoicePaymentApiModule } from './customer-invoice-payment-api.module';

describe('CustomerInvoicePaymentApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerInvoicePaymentApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerInvoicePaymentApiModule).toBeDefined();
  });
});
