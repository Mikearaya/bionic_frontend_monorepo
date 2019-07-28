import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightOrderPaymentRecievingViewComponent } from './freight-order-payment-recieving-view.component';

describe('FreightOrderPaymentRecievingViewComponent', () => {
  let component: FreightOrderPaymentRecievingViewComponent;
  let fixture: ComponentFixture<FreightOrderPaymentRecievingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightOrderPaymentRecievingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightOrderPaymentRecievingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
