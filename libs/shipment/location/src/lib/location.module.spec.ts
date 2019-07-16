import { async, TestBed } from '@angular/core/testing';
import { LocationModule } from './location.module';

describe('LocationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LocationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LocationModule).toBeDefined();
  });
});
