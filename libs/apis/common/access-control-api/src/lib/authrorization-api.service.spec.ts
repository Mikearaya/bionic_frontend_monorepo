import { TestBed } from '@angular/core/testing';

import { AuthorizationApiService } from './authorization-api.service';

describe('AuthorizationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorizationApiService = TestBed.get(
      AuthorizationApiService
    );
    expect(service).toBeTruthy();
  });
});
