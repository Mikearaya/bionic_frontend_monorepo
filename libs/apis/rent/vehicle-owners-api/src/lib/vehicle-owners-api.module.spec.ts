import { async, TestBed } from '@angular/core/testing';
import { VehicleOwnersApiModule } from './vehicle-owners-api.module';

describe('VehicleOwnersApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VehicleOwnersApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VehicleOwnersApiModule).toBeDefined();
  });
});
