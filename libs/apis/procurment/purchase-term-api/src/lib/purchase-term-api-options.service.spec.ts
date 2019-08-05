import { TestBed } from '@angular/core/testing';

import { PurchaseTermApiOptionsService } from './purchase-term-api-options.service';

describe('PurchaseTermApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseTermApiOptionsService = TestBed.get(PurchaseTermApiOptionsService);
    expect(service).toBeTruthy();
  });
});
