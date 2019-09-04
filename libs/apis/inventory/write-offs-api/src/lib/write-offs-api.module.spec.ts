import { async, TestBed } from '@angular/core/testing';
import { WriteOffsApiModule } from './write-offs-api.module';

describe('WriteOffsApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WriteOffsApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WriteOffsApiModule).toBeDefined();
  });
});
