import { async, TestBed } from '@angular/core/testing';
import { InventoryCountModule } from './inventory-count.module';

describe('InventoryCountModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InventoryCountModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InventoryCountModule).toBeDefined();
  });
});
