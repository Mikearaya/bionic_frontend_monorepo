import { async, TestBed } from '@angular/core/testing';
import { CrmReportApiModule } from './crm-report-api.module';

describe('CrmReportApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CrmReportApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CrmReportApiModule).toBeDefined();
  });
});
