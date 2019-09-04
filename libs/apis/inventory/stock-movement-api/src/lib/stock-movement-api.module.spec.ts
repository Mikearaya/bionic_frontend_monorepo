import { async, TestBed } from '@angular/core/testing';
import { StockMovementApiModule } from './stock-movement-api.module';

describe('StockMovementApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StockMovementApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StockMovementApiModule).toBeDefined();
  });
});
