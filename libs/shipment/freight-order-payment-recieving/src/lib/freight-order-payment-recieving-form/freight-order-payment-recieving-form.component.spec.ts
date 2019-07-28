import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightOrderPaymentRecievingFormComponent } from './freight-order-payment-recieving-form.component';

describe('FreightOrderPaymentRecievingFormComponent', () => {
  let component: FreightOrderPaymentRecievingFormComponent;
  let fixture: ComponentFixture<FreightOrderPaymentRecievingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightOrderPaymentRecievingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightOrderPaymentRecievingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
