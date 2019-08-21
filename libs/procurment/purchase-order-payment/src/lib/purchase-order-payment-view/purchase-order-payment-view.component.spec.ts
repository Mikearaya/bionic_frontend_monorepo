import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderPaymentViewComponent } from './purchase-order-payment-view.component';

describe('PurchaseOrderPaymentViewComponent', () => {
  let component: PurchaseOrderPaymentViewComponent;
  let fixture: ComponentFixture<PurchaseOrderPaymentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderPaymentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderPaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
