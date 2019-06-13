import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRentViewComponent } from './vehicle-rent-view.component';

describe('VehicleRentViewComponent', () => {
  let component: VehicleRentViewComponent;
  let fixture: ComponentFixture<VehicleRentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleRentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
