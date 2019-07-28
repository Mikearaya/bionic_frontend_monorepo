import { async, TestBed } from '@angular/core/testing';
import { FreightOrderPaymentRequestApiModule } from './freight-order-payment-request-api.module';

describe('FreightOrderPaymentRequestApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FreightOrderPaymentRequestApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FreightOrderPaymentRequestApiModule).toBeDefined();
  });
});
