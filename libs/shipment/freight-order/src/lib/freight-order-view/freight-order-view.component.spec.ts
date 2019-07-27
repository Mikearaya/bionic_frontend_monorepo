import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightOrderViewComponent } from './freight-order-view.component';

describe('FreightOrderViewComponent', () => {
  let component: FreightOrderViewComponent;
  let fixture: ComponentFixture<FreightOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
