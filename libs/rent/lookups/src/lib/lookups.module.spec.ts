import { async, TestBed } from '@angular/core/testing';
import { LookupsModule } from './lookups.module';

describe('LookupsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LookupsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LookupsModule).toBeDefined();
  });
});
