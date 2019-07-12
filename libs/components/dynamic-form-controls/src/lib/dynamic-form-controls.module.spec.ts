import { async, TestBed } from '@angular/core/testing';
import { DynamicFormControlsModule } from './dynamic-form-controls.module';

describe('DynamicFormControlsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DynamicFormControlsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DynamicFormControlsModule).toBeDefined();
  });
});
