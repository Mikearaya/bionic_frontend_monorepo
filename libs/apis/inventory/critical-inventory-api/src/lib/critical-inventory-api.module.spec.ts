import { async, TestBed } from '@angular/core/testing';
import { CriticalInventoryApiModule } from './critical-inventory-api.module';

describe('CriticalInventoryApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CriticalInventoryApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CriticalInventoryApiModule).toBeDefined();
  });
});
