import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightOrderPaymentRequestFormComponent } from './freight-order-payment-request-form.component';

describe('FreightOrderPaymentRequestFormComponent', () => {
  let component: FreightOrderPaymentRequestFormComponent;
  let fixture: ComponentFixture<FreightOrderPaymentRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightOrderPaymentRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightOrderPaymentRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
