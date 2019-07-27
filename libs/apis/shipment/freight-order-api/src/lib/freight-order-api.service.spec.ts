import { TestBed } from '@angular/core/testing';

import { FreightOrderApiService } from './freight-order-api.service';

describe('FreightOrderApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreightOrderApiService = TestBed.get(FreightOrderApiService);
    expect(service).toBeTruthy();
  });
});
