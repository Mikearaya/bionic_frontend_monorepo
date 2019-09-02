import { async, TestBed } from '@angular/core/testing';
import { StockBatchModule } from './stock-batch.module';

describe('StockBatchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StockBatchModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StockBatchModule).toBeDefined();
  });
});
