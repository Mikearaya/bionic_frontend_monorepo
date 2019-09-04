import { async, TestBed } from '@angular/core/testing';
import { WriteOffsModule } from './write-offs.module';

describe('WriteOffsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WriteOffsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WriteOffsModule).toBeDefined();
  });
});
