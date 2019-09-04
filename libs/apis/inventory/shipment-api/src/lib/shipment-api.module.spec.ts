import { async, TestBed } from '@angular/core/testing';
import { ShipmentApiModule } from './shipment-api.module';

describe('ShipmentApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShipmentApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShipmentApiModule).toBeDefined();
  });
});
