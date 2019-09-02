import { async, TestBed } from '@angular/core/testing';
import { StockBatchApiModule } from './stock-batch-api.module';

describe('StockBatchApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StockBatchApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StockBatchApiModule).toBeDefined();
  });
});
