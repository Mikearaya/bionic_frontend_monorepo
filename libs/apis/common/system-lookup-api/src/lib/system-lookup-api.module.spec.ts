import { async, TestBed } from '@angular/core/testing';
import { SystemLookupApiModule } from './system-lookup-api.module';

describe('SystemLookupApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SystemLookupApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SystemLookupApiModule).toBeDefined();
  });
});
