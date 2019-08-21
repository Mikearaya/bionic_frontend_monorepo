import { TestBed } from '@angular/core/testing';

import { PurchaseOrderPaymentsApiOptionsService } from './purchase-order-payments-api-options.service';

describe('PurchaseOrderPaymentsApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseOrderPaymentsApiOptionsService = TestBed.get(PurchaseOrderPaymentsApiOptionsService);
    expect(service).toBeTruthy();
  });
});
