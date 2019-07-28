import { async, TestBed } from '@angular/core/testing';
import { FreightOrderPaymentRecievingModule } from './freight-order-payment-recieving.module';

describe('FreightOrderPaymentRecievingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FreightOrderPaymentRecievingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FreightOrderPaymentRecievingModule).toBeDefined();
  });
});
