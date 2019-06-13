import { async, TestBed } from '@angular/core/testing';
import { VehicleOwnersModule } from './vehicle-owners.module';

describe('VehicleOwnersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VehicleOwnersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VehicleOwnersModule).toBeDefined();
  });
});
