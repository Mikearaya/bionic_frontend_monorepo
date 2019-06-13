import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRentFormComponent } from './vehicle-rent-form.component';

describe('VehicleRentFormComponent', () => {
  let component: VehicleRentFormComponent;
  let fixture: ComponentFixture<VehicleRentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleRentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
