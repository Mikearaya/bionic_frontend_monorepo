import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInvoicePaymentFormComponent } from './customer-invoice-payment-form.component';

describe('CustomerInvoicePaymentFormComponent', () => {
  let component: CustomerInvoicePaymentFormComponent;
  let fixture: ComponentFixture<CustomerInvoicePaymentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInvoicePaymentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInvoicePaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
