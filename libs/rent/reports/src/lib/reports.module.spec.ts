import { async, TestBed } from '@angular/core/testing';
import { ReportsModule } from './reports.module';

describe('ReportsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReportsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ReportsModule).toBeDefined();
  });
});
