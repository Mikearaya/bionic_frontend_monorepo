import { async, TestBed } from '@angular/core/testing';
import { ProcurmentReportApiModule } from './procurment-report-api.module';

describe('ProcurmentReportApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProcurmentReportApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProcurmentReportApiModule).toBeDefined();
  });
});
