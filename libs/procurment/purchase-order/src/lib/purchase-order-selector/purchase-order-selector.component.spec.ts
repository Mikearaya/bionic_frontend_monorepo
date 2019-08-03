import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderSelectorComponent } from './purchase-order-selector.component';

describe('PurchaseOrderSelectorComponent', () => {
  let component: PurchaseOrderSelectorComponent;
  let fixture: ComponentFixture<PurchaseOrderSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
