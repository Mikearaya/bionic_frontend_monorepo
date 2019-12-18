import { TestBed } from '@angular/core/testing';

import { InventoryReportApiService } from './inventory-report-api.service';

describe('InventoryReportApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryReportApiService = TestBed.get(InventoryReportApiService);
    expect(service).toBeTruthy();
  });
});
