import { TestBed } from '@angular/core/testing';

import { RentsApiService } from './rents-api.service';

describe('RentsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentsApiService = TestBed.get(RentsApiService);
    expect(service).toBeTruthy();
  });
});
