import { async, TestBed } from '@angular/core/testing';
import { BankAccountModule } from './bank-account.module';

describe('BankAccountModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BankAccountModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BankAccountModule).toBeDefined();
  });
});
