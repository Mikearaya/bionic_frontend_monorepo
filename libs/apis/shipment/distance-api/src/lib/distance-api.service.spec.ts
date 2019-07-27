import { TestBed } from '@angular/core/testing';

import { DistanceApiService } from './distance-api.service';

describe('DistanceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistanceApiService = TestBed.get(DistanceApiService);
    expect(service).toBeTruthy();
  });
});
