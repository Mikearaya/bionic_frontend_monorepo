import { async, TestBed } from '@angular/core/testing';
import { PurchaseOrderModule } from './purchase-order.module';

describe('PurchaseOrderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PurchaseOrderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PurchaseOrderModule).toBeDefined();
  });
});
