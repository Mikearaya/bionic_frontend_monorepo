import { async, TestBed } from '@angular/core/testing';
import { UnitOfMeasurmentsModule } from './unit-of-measurments.module';

describe('UnitOfMeasurmentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UnitOfMeasurmentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UnitOfMeasurmentsModule).toBeDefined();
  });
});
