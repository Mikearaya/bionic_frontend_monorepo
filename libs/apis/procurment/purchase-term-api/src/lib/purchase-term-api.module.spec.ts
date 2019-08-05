import { async, TestBed } from '@angular/core/testing';
import { PurchaseTermApiModule } from './purchase-term-api.module';

describe('PurchaseTermApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PurchaseTermApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PurchaseTermApiModule).toBeDefined();
  });
});
