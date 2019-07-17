import { async, TestBed } from '@angular/core/testing';
import { OperationsApiModule } from './operations-api.module';

describe('OperationsApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OperationsApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OperationsApiModule).toBeDefined();
  });
});
