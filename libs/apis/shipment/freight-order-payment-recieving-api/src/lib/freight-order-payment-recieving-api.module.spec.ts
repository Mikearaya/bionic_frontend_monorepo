import { async, TestBed } from '@angular/core/testing';
import { FreightOrderPaymentRecievingApiModule } from './freight-order-payment-recieving-api.module';

describe('FreightOrderPaymentRecievingApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FreightOrderPaymentRecievingApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FreightOrderPaymentRecievingApiModule).toBeDefined();
  });
});
