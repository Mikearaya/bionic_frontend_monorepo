import { async, TestBed } from '@angular/core/testing';
import { UnitOfMeasurmentsApiModule } from './unit-of-measurments-api.module';

describe('UnitOfMeasurmentsApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UnitOfMeasurmentsApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UnitOfMeasurmentsApiModule).toBeDefined();
  });
});
