import { async, TestBed } from '@angular/core/testing';
import { LocationApiModule } from './location-api.module';

describe('LocationApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LocationApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LocationApiModule).toBeDefined();
  });
});
