import { TestBed } from '@angular/core/testing';

import { CustomerApiOptionsService } from './customer-api-options.service';

describe('CustomerApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerApiOptionsService = TestBed.get(CustomerApiOptionsService);
    expect(service).toBeTruthy();
  });
});
