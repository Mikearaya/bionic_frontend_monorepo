import { TestBed } from '@angular/core/testing';

import { VendorApiOptionsService } from './vendor-api-options.service';

describe('VendorApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorApiOptionsService = TestBed.get(VendorApiOptionsService);
    expect(service).toBeTruthy();
  });
});
