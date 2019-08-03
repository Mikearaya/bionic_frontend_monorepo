import { async, TestBed } from '@angular/core/testing';
import { VendorApiModule } from './vendor-api.module';

describe('VendorApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VendorApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VendorApiModule).toBeDefined();
  });
});
