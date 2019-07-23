import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountViewComponent } from './bank-account-view.component';

describe('BankAccountViewComponent', () => {
  let component: BankAccountViewComponent;
  let fixture: ComponentFixture<BankAccountViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
