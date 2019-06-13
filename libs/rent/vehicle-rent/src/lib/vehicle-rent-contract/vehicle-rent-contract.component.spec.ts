import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRentContractComponent } from './vehicle-rent-contract.component';

describe('VehicleRentContractComponent', () => {
  let component: VehicleRentContractComponent;
  let fixture: ComponentFixture<VehicleRentContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleRentContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRentContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
