import { TestBed } from '@angular/core/testing';

import { PurchaseOrderPaymentsApiService } from './purchase-order-payments-api.service';

describe('PurchaseOrderPaymentsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseOrderPaymentsApiService = TestBed.get(PurchaseOrderPaymentsApiService);
    expect(service).toBeTruthy();
  });
});
