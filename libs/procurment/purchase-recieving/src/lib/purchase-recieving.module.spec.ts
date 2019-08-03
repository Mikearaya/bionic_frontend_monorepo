import { async, TestBed } from '@angular/core/testing';
import { PurchaseRecievingModule } from './purchase-recieving.module';

describe('PurchaseRecievingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PurchaseRecievingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PurchaseRecievingModule).toBeDefined();
  });
});
