import { TestBed } from '@angular/core/testing';

import { PurchaseRecievingApiService } from './purchase-recieving-api.service';

describe('PurchaseRecievingApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseRecievingApiService = TestBed.get(PurchaseRecievingApiService);
    expect(service).toBeTruthy();
  });
});
