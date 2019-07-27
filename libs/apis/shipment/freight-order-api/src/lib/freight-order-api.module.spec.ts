import { async, TestBed } from '@angular/core/testing';
import { FreightOrderApiModule } from './freight-order-api.module';

describe('FreightOrderApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FreightOrderApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FreightOrderApiModule).toBeDefined();
  });
});
