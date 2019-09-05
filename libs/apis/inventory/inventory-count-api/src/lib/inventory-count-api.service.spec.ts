import { TestBed } from '@angular/core/testing';

import { InventoryCountApiService } from './inventory-count-api.service';

describe('InventoryCountApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryCountApiService = TestBed.get(
      InventoryCountApiService
    );
    expect(service).toBeTruthy();
  });
});
