import { TestBed } from '@angular/core/testing';

import { CriticalInventoryApiOptionsService } from './critical-inventory-api-options.service';

describe('CriticalInventoryApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriticalInventoryApiOptionsService = TestBed.get(CriticalInventoryApiOptionsService);
    expect(service).toBeTruthy();
  });
});
