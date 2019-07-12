import { TestBed } from '@angular/core/testing';

import { SystemUserApiService } from './system-user-api.service';

describe('SystemUserApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemUserApiService = TestBed.get(SystemUserApiService);
    expect(service).toBeTruthy();
  });
});
