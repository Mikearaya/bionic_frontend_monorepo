import { async, TestBed } from '@angular/core/testing';
import { FreightOrderPaymentRequestModule } from './freight-order-payment-request.module';

describe('FreightOrderPaymentRequestModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FreightOrderPaymentRequestModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FreightOrderPaymentRequestModule).toBeDefined();
  });
});
