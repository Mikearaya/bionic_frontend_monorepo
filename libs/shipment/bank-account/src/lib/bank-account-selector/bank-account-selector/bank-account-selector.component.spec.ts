import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountSelectorComponent } from './bank-account-selector.component';

describe('BankAccountSelectorComponent', () => {
  let component: BankAccountSelectorComponent;
  let fixture: ComponentFixture<BankAccountSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
