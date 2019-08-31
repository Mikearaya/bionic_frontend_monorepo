import { TestBed } from '@angular/core/testing';

import { StorageLocationsApiOptionsService } from './storage-locations-api-options.service';

describe('StorageLocationsApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageLocationsApiOptionsService = TestBed.get(StorageLocationsApiOptionsService);
    expect(service).toBeTruthy();
  });
});
