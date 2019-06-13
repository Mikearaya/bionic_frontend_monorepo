import { async, TestBed } from '@angular/core/testing';
import { VehiclesModule } from './vehicles.module';

describe('VehiclesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VehiclesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VehiclesModule).toBeDefined();
  });
});
