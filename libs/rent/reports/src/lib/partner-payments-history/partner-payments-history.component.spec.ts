import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPaymentsHistoryComponent } from './partner-payments-history.component';

describe('PartnerPaymentsHistoryComponent', () => {
  let component: PartnerPaymentsHistoryComponent;
  let fixture: ComponentFixture<PartnerPaymentsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerPaymentsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerPaymentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
