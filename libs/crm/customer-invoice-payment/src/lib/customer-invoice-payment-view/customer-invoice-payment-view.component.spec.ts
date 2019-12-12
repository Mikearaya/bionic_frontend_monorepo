import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInvoicePaymentViewComponent } from './customer-invoice-payment-view.component';

describe('CustomerInvoicePaymentViewComponent', () => {
  let component: CustomerInvoicePaymentViewComponent;
  let fixture: ComponentFixture<CustomerInvoicePaymentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInvoicePaymentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInvoicePaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
