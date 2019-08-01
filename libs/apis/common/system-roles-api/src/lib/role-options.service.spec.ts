import { TestBed } from '@angular/core/testing';

import { RoleOptionsService } from './role-options.service';

describe('RoleOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleOptionsService = TestBed.get(RoleOptionsService);
    expect(service).toBeTruthy();
  });
});
