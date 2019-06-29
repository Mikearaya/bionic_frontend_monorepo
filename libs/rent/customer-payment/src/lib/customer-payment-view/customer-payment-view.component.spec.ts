import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentViewComponent } from './customer-payment-view.component';

describe('CustomerPaymentViewComponent', () => {
  let component: CustomerPaymentViewComponent;
  let fixture: ComponentFixture<CustomerPaymentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPaymentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
