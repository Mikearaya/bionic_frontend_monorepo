import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightOrderFormComponent } from './freight-order-form.component';

describe('FreightOrderFormComponent', () => {
  let component: FreightOrderFormComponent;
  let fixture: ComponentFixture<FreightOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
