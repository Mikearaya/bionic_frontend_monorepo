import { async, TestBed } from '@angular/core/testing';
import { PartnersPaymentApiModule } from './partners-payment-api.module';

describe('PartnersPaymentApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PartnersPaymentApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PartnersPaymentApiModule).toBeDefined();
  });
});
