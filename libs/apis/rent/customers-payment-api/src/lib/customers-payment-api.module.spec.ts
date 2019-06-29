import { async, TestBed } from '@angular/core/testing';
import { CustomersPaymentApiModule } from './customers-payment-api.module';

describe('CustomersPaymentApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomersPaymentApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomersPaymentApiModule).toBeDefined();
  });
});
