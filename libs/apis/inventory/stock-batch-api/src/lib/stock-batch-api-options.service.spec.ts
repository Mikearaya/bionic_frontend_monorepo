import { TestBed } from '@angular/core/testing';

import { StockBatchApiOptionsService } from './stock-batch-api-options.service';

describe('StockBatchApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockBatchApiOptionsService = TestBed.get(StockBatchApiOptionsService);
    expect(service).toBeTruthy();
  });
});
