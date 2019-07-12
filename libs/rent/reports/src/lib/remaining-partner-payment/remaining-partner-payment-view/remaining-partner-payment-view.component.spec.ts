import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingPartnerPaymentViewComponent } from './remaining-partner-payment-view.component';

describe('RemainingPartnerPaymentViewComponent', () => {
  let component: RemainingPartnerPaymentViewComponent;
  let fixture: ComponentFixture<RemainingPartnerPaymentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingPartnerPaymentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingPartnerPaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
