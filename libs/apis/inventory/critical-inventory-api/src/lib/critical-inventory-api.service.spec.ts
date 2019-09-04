import { TestBed } from '@angular/core/testing';

import { CriticalInventoryApiService } from './critical-inventory-api.service';

describe('CriticalInventoryApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriticalInventoryApiService = TestBed.get(CriticalInventoryApiService);
    expect(service).toBeTruthy();
  });
});
