import { TestBed } from '@angular/core/testing';

import { LayoutOptionsService } from './layout-options.service';

describe('LayoutOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutOptionsService = TestBed.get(LayoutOptionsService);
    expect(service).toBeTruthy();
  });
});
