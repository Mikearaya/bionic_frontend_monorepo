import { async, TestBed } from '@angular/core/testing';
import { VehicleTrailorApiModule } from './vehicle-trailor-api.module';

describe('VehicleTrailorApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VehicleTrailorApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VehicleTrailorApiModule).toBeDefined();
  });
});
