import { async, TestBed } from '@angular/core/testing';
import { PartnersPaymentModule } from './partners-payment.module';

describe('PartnersPaymentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PartnersPaymentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PartnersPaymentModule).toBeDefined();
  });
});
