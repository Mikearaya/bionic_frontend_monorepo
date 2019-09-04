import { async, TestBed } from '@angular/core/testing';
import { ShipmentModule } from './shipment.module';

describe('ShipmentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShipmentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShipmentModule).toBeDefined();
  });
});
