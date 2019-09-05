import { TestBed } from '@angular/core/testing';

import { InventoryCountApiOptionsService } from './inventory-count-api-options.service';

describe('InventoryCountApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryCountApiOptionsService = TestBed.get(
      InventoryCountApiOptionsService
    );
    expect(service).toBeTruthy();
  });
});
