import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPaymentRecieptComponent } from './partner-payment-reciept.component';

describe('PartnerPaymentRecieptComponent', () => {
  let component: PartnerPaymentRecieptComponent;
  let fixture: ComponentFixture<PartnerPaymentRecieptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerPaymentRecieptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerPaymentRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
