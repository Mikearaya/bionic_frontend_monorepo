import { TestBed } from '@angular/core/testing';

import { RentDashBoardApiService } from './rent-dashboard-api.service';

describe('RentDashBoardApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentDashBoardApiService = TestBed.get(
      RentDashBoardApiService
    );
    expect(service).toBeTruthy();
  });
});
