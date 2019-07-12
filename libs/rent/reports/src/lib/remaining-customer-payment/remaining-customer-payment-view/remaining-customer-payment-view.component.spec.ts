import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingCustomerPaymentViewComponent } from './remaining-customer-payment-view.component';

describe('RemainingCustomerPaymentViewComponent', () => {
  let component: RemainingCustomerPaymentViewComponent;
  let fixture: ComponentFixture<RemainingCustomerPaymentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingCustomerPaymentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingCustomerPaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
