import { async, TestBed } from '@angular/core/testing';
import { InventoryCountApiModule } from './inventory-count-api.module';

describe('InventoryCountApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InventoryCountApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InventoryCountApiModule).toBeDefined();
  });
});
