import { async, TestBed } from '@angular/core/testing';
import { ReportsApiModule } from './reports-api.module';

describe('ReportsApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReportsApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ReportsApiModule).toBeDefined();
  });
});
