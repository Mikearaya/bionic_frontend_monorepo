import { async, TestBed } from '@angular/core/testing';
import { OperationsModule } from './operations.module';

describe('OperationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OperationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OperationsModule).toBeDefined();
  });
});
