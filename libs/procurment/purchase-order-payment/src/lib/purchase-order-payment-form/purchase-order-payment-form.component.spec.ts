import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderPaymentFormComponent } from './purchase-order-payment-form.component';

describe('PurchaseOrderPaymentFormComponent', () => {
  let component: PurchaseOrderPaymentFormComponent;
  let fixture: ComponentFixture<PurchaseOrderPaymentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderPaymentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
