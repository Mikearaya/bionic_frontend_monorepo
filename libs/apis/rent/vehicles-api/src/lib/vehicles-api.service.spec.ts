import { TestBed } from '@angular/core/testing';

import { VehiclesApiService } from './vehicles-api.service';

describe('VehiclesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehiclesApiService = TestBed.get(VehiclesApiService);
    expect(service).toBeTruthy();
  });
});
