import { async, TestBed } from '@angular/core/testing';
import { VendorModule } from './vendor.module';

describe('VendorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VendorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VendorModule).toBeDefined();
  });
});
