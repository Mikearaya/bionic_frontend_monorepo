import { TestBed } from '@angular/core/testing';

import { BankAccountApiService } from './bank-account-api.service';

describe('BankAccountApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankAccountApiService = TestBed.get(BankAccountApiService);
    expect(service).toBeTruthy();
  });
});
