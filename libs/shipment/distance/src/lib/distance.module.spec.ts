import { async, TestBed } from '@angular/core/testing';
import { DistanceModule } from './distance.module';

describe('DistanceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DistanceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DistanceModule).toBeDefined();
  });
});
