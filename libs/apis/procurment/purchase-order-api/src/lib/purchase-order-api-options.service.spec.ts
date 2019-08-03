import { TestBed } from '@angular/core/testing';

import { PurchaseOrderApiOptionsService } from './purchase-order-api-options.service';

describe('PurchaseOrderApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseOrderApiOptionsService = TestBed.get(PurchaseOrderApiOptionsService);
    expect(service).toBeTruthy();
  });
});
