import { TestBed } from '@angular/core/testing';

import { CustomerOrderApiOptionsService } from './customer-order-api-options.service';

describe('CustomerOrderApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerOrderApiOptionsService = TestBed.get(CustomerOrderApiOptionsService);
    expect(service).toBeTruthy();
  });
});
