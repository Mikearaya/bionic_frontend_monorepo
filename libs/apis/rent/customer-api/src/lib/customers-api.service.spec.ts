import { TestBed } from '@angular/core/testing';

import { CustomersApiService } from './customers-api.service';

describe('CustomersApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersApiService = TestBed.get(CustomersApiService);
    expect(service).toBeTruthy();
  });
});
