import { async, TestBed } from '@angular/core/testing';
import { VehicleRentModule } from './vehicle-rent.module';

describe('VehicleRentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VehicleRentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VehicleRentModule).toBeDefined();
  });
});
