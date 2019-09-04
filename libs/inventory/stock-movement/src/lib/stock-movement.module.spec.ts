import { async, TestBed } from '@angular/core/testing';
import { StockMovementModule } from './stock-movement.module';

describe('StockMovementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StockMovementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StockMovementModule).toBeDefined();
  });
});
