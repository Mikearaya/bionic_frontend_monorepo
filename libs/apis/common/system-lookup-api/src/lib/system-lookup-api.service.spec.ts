import { TestBed } from '@angular/core/testing';

import { SystemLookupApiService } from './system-lookup-api.service';

describe('SystemLookupApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemLookupApiService = TestBed.get(SystemLookupApiService);
    expect(service).toBeTruthy();
  });
});
