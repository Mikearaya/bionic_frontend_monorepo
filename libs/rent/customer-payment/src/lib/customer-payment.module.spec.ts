import { async, TestBed } from '@angular/core/testing';
import { CustomerPaymentModule } from './customer-payment.module';

describe('CustomerPaymentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerPaymentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerPaymentModule).toBeDefined();
  });
});
