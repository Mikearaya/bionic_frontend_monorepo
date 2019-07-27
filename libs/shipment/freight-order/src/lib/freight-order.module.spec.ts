import { async, TestBed } from '@angular/core/testing';
import { FreightOrderModule } from './freight-order.module';

describe('FreightOrderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FreightOrderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FreightOrderModule).toBeDefined();
  });
});
