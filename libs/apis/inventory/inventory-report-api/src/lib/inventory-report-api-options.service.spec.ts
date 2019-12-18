import { TestBed } from '@angular/core/testing';

import { InventoryReportApiOptionsService } from './inventory-report-api-options.service';

describe('InventoryReportApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryReportApiOptionsService = TestBed.get(InventoryReportApiOptionsService);
    expect(service).toBeTruthy();
  });
});
