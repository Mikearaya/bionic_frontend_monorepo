import { TestBed } from '@angular/core/testing';

import { StorageLocationsApiService } from './storage-locations-api.service';

describe('StorageLocationsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageLocationsApiService = TestBed.get(StorageLocationsApiService);
    expect(service).toBeTruthy();
  });
});
