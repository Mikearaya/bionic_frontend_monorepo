import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderSelectorComponent } from './customer-order-selector.component';

describe('CustomerOrderSelectorComponent', () => {
  let component: CustomerOrderSelectorComponent;
  let fixture: ComponentFixture<CustomerOrderSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOrderSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
