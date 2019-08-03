import { async, TestBed } from '@angular/core/testing';
import { PurchaseRecievingApiModule } from './purchase-recieving-api.module';

describe('PurchaseRecievingApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PurchaseRecievingApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PurchaseRecievingApiModule).toBeDefined();
  });
});
