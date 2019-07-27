import { async, TestBed } from '@angular/core/testing';
import { DistanceApiModule } from './distance-api.module';

describe('DistanceApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DistanceApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DistanceApiModule).toBeDefined();
  });
});
