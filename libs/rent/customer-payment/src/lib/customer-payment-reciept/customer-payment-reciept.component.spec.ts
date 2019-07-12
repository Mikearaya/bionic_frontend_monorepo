import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentRecieptComponent } from './customer-payment-reciept.component';

describe('CustomerPaymentRecieptComponent', () => {
  let component: CustomerPaymentRecieptComponent;
  let fixture: ComponentFixture<CustomerPaymentRecieptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPaymentRecieptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPaymentRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
