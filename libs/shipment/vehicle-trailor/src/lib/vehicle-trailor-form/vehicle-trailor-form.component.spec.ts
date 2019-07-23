import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTrailorFormComponent } from './vehicle-trailor-form.component';

describe('VehicleTrailorFormComponent', () => {
  let component: VehicleTrailorFormComponent;
  let fixture: ComponentFixture<VehicleTrailorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTrailorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTrailorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
