import { async, TestBed } from '@angular/core/testing';
import { PurchaseOrderApiModule } from './purchase-order-api.module';

describe('PurchaseOrderApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PurchaseOrderApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PurchaseOrderApiModule).toBeDefined();
  });
});
