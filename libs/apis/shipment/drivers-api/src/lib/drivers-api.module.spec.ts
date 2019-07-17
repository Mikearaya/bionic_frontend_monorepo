import { async, TestBed } from '@angular/core/testing';
import { DriversApiModule } from './drivers-api.module';

describe('DriversApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DriversApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DriversApiModule).toBeDefined();
  });
});
