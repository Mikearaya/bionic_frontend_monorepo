import { TestBed } from '@angular/core/testing';

import { CustomerOrderApiService } from './customer-order-api.service';

describe('CustomerOrderApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerOrderApiService = TestBed.get(CustomerOrderApiService);
    expect(service).toBeTruthy();
  });
});
