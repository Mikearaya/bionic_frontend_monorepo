import { async, TestBed } from '@angular/core/testing';
import { RentsApiModule } from './rents-api.module';

describe('RentsApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RentsApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RentsApiModule).toBeDefined();
  });
});
