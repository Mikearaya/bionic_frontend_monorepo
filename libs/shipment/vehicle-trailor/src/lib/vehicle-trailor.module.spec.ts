import { async, TestBed } from '@angular/core/testing';
import { VehicleTrailorModule } from './vehicle-trailor.module';

describe('VehicleTrailorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VehicleTrailorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VehicleTrailorModule).toBeDefined();
  });
});
