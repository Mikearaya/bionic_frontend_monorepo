import { async, TestBed } from '@angular/core/testing';
import { PurchaseOrderPaymentModule } from './purchase-order-payment.module';

describe('PurchaseOrderPaymentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PurchaseOrderPaymentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PurchaseOrderPaymentModule).toBeDefined();
  });
});
