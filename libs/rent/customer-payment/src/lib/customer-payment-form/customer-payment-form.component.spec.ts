import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentFormComponent } from './customer-payment-form.component';

describe('CustomerPaymentFormComponent', () => {
  let component: CustomerPaymentFormComponent;
  let fixture: ComponentFixture<CustomerPaymentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPaymentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
