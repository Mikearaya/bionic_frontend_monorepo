import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightOrderPaymentRequestViewComponent } from './freight-order-payment-request-view.component';

describe('FreightOrderPaymentRequestViewComponent', () => {
  let component: FreightOrderPaymentRequestViewComponent;
  let fixture: ComponentFixture<FreightOrderPaymentRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightOrderPaymentRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightOrderPaymentRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
