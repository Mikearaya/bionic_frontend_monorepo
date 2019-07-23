import { TestBed } from '@angular/core/testing';

import { VehicleTrailorApiService } from './vehicle-trailor-api.service';

describe('VehicleTrailorApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleTrailorApiService = TestBed.get(VehicleTrailorApiService);
    expect(service).toBeTruthy();
  });
});
