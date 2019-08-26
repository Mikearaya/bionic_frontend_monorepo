import { async, TestBed } from '@angular/core/testing';
import { SystemLookupModule } from './system-lookup.module';

describe('SystemLookupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SystemLookupModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SystemLookupModule).toBeDefined();
  });
});
