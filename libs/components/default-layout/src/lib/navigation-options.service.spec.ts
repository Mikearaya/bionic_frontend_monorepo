import { TestBed } from '@angular/core/testing';

import { NavigationOptionsService } from './navigation-options.service';

describe('NavigationOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationOptionsService = TestBed.get(NavigationOptionsService);
    expect(service).toBeTruthy();
  });
});
