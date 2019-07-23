import { async, TestBed } from '@angular/core/testing';
import { BankAccountApiModule } from './bank-account-api.module';

describe('BankAccountApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BankAccountApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BankAccountApiModule).toBeDefined();
  });
});
