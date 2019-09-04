import { TestBed } from '@angular/core/testing';

import { ShipmentApiOptionsService } from './shipment-api-options.service';

describe('ShipmentApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipmentApiOptionsService = TestBed.get(ShipmentApiOptionsService);
    expect(service).toBeTruthy();
  });
});
