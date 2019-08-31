import { TestBed } from '@angular/core/testing';

import { UnitOfMeasurmentsApiService } from './unit-of-measurments-api.service';

describe('UnitOfMeasurmentsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitOfMeasurmentsApiService = TestBed.get(UnitOfMeasurmentsApiService);
    expect(service).toBeTruthy();
  });
});
