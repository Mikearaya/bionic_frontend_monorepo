import { TestBed } from '@angular/core/testing';

import { AuthenticationApiService } from './authentication-api.service';

describe('AuthenticationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationApiService = TestBed.get(AuthenticationApiService);
    expect(service).toBeTruthy();
  });
});
