import { async, TestBed } from '@angular/core/testing';
import { DriversModule } from './drivers.module';

describe('DriversModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DriversModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DriversModule).toBeDefined();
  });
});
