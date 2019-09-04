import { async, TestBed } from '@angular/core/testing';
import { CriticalInventoryModule } from './critical-inventory.module';

describe('CriticalInventoryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CriticalInventoryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CriticalInventoryModule).toBeDefined();
  });
});
