import { TestBed } from '@angular/core/testing';

import { VehicleOwnersApiService } from './vehicle-owners-api.service';

describe('VehicleOwnersApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleOwnersApiService = TestBed.get(VehicleOwnersApiService);
    expect(service).toBeTruthy();
  });
});
