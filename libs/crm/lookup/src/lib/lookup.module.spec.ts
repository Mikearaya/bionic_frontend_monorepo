import { async, TestBed } from '@angular/core/testing';
import { LookupModule } from './lookup.module';

describe('LookupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LookupModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LookupModule).toBeDefined();
  });
});
