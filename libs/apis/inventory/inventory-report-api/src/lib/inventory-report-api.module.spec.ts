import { async, TestBed } from '@angular/core/testing';
import { InventoryReportApiModule } from './inventory-report-api.module';

describe('InventoryReportApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InventoryReportApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InventoryReportApiModule).toBeDefined();
  });
});
