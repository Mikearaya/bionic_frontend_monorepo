import { async, TestBed } from '@angular/core/testing';
import { FormButtonsModule } from './form-buttons.module';

describe('FormButtonsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormButtonsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormButtonsModule).toBeDefined();
  });
});
