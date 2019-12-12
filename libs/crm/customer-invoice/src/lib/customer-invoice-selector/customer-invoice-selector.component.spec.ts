import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInvoiceSelectorComponent } from './customer-invoice-selector.component';

describe('CustomerInvoiceSelectorComponent', () => {
  let component: CustomerInvoiceSelectorComponent;
  let fixture: ComponentFixture<CustomerInvoiceSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInvoiceSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInvoiceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
