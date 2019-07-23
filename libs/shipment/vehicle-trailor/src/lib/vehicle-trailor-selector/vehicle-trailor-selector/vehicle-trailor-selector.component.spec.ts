import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTrailorSelectorComponent } from './vehicle-trailor-selector.component';

describe('VehicleTrailorSelectorComponent', () => {
  let component: VehicleTrailorSelectorComponent;
  let fixture: ComponentFixture<VehicleTrailorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTrailorSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTrailorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
