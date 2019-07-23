import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTrailorViewComponent } from './vehicle-trailor-view.component';

describe('VehicleTrailorViewComponent', () => {
  let component: VehicleTrailorViewComponent;
  let fixture: ComponentFixture<VehicleTrailorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTrailorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTrailorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
