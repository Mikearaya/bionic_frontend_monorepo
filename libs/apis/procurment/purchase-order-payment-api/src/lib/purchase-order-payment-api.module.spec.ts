import { async, TestBed } from '@angular/core/testing';
import { PurchaseOrderPaymentApiModule } from './purchase-order-payment-api.module';

describe('PurchaseOrderPaymentApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PurchaseOrderPaymentApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PurchaseOrderPaymentApiModule).toBeDefined();
  });
});
