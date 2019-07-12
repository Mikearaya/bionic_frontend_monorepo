import { TestBed } from '@angular/core/testing';

import { DynamicFormControlService } from './dynamic-form-control.service';

describe('DynamicFormControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicFormControlService = TestBed.get(DynamicFormControlService);
    expect(service).toBeTruthy();
  });
});
