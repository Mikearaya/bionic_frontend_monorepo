import { TestBed } from '@angular/core/testing';

import { PurchaseRecievingApiOptionsService } from './purchase-recieving-api-options.service';

describe('PurchaseRecievingApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseRecievingApiOptionsService = TestBed.get(PurchaseRecievingApiOptionsService);
    expect(service).toBeTruthy();
  });
});
