import { TestBed } from '@angular/core/testing';

import { StockMovementApiOptionsService } from './stock-movement-api-options.service';

describe('StockMovementApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockMovementApiOptionsService = TestBed.get(StockMovementApiOptionsService);
    expect(service).toBeTruthy();
  });
});
