import { TestBed } from '@angular/core/testing';

import { UnitOfMeasurmentsApiOptionsService } from './unit-of-measurments-api-options.service';

describe('UnitOfMeasurmentsApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitOfMeasurmentsApiOptionsService = TestBed.get(UnitOfMeasurmentsApiOptionsService);
    expect(service).toBeTruthy();
  });
});
