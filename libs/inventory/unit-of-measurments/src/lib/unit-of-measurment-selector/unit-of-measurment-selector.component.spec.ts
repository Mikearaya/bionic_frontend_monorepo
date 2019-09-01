import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOfMeasurmentSelectorComponent } from './unit-of-measurment-selector.component';

describe('UnitOfMeasurmentSelectorComponent', () => {
  let component: UnitOfMeasurmentSelectorComponent;
  let fixture: ComponentFixture<UnitOfMeasurmentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitOfMeasurmentSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitOfMeasurmentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
