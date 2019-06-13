import { async, TestBed } from '@angular/core/testing';
import { VehiclesApiModule } from './vehicles-api.module';

describe('VehiclesApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VehiclesApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VehiclesApiModule).toBeDefined();
  });
});
