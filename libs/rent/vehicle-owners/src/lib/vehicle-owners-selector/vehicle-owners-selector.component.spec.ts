import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleOwnersSelectorComponent } from './vehicle-owners-selector.component';

describe('VehicleOwnersSelectorComponent', () => {
  let component: VehicleOwnersSelectorComponent;
  let fixture: ComponentFixture<VehicleOwnersSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleOwnersSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleOwnersSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
