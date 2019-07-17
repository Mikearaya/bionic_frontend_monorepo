import { TestBed } from '@angular/core/testing';

import { DriversApiService } from './drivers-api.service';

describe('DriversApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriversApiService = TestBed.get(DriversApiService);
    expect(service).toBeTruthy();
  });
});
