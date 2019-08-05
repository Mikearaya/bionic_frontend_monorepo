import { async, TestBed } from '@angular/core/testing';
import { PurchaseTermModule } from './purchase-term.module';

describe('PurchaseTermModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PurchaseTermModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PurchaseTermModule).toBeDefined();
  });
});
