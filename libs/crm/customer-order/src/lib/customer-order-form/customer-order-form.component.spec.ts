import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderFormComponent } from './customer-order-form.component';

describe('CustomerOrderFormComponent', () => {
  let component: CustomerOrderFormComponent;
  let fixture: ComponentFixture<CustomerOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerOrderFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
