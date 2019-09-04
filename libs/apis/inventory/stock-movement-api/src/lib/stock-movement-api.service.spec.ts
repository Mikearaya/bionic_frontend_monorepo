import { TestBed } from '@angular/core/testing';

import { StockMovementApiService } from './stock-movement-api.service';

describe('StockMovementApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockMovementApiService = TestBed.get(StockMovementApiService);
    expect(service).toBeTruthy();
  });
});
