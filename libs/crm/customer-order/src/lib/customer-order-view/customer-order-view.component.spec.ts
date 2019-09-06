import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderViewComponent } from './customer-order-view.component';

describe('CustomerOrderViewComponent', () => {
  let component: CustomerOrderViewComponent;
  let fixture: ComponentFixture<CustomerOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerOrderViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
