import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightOrderSelectorComponent } from './freight-order-selector.component';

describe('FreightOrderSelectorComponent', () => {
  let component: FreightOrderSelectorComponent;
  let fixture: ComponentFixture<FreightOrderSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightOrderSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightOrderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
