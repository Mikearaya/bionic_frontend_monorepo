import { TestBed } from '@angular/core/testing';

import { RentHistoryApiService } from './rent-history-api.service';

describe('RentHistoryApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentHistoryApiService = TestBed.get(RentHistoryApiService);
    expect(service).toBeTruthy();
  });
});
