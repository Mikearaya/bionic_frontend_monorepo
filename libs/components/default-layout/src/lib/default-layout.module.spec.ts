import { async, TestBed } from '@angular/core/testing';
import { DefaultLayoutModule } from './default-layout.module';

describe('DefaultLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DefaultLayoutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DefaultLayoutModule).toBeDefined();
  });
});
