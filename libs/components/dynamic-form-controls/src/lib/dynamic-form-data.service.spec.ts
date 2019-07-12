import { TestBed } from '@angular/core/testing';

import { DynamicFormDataService } from './dynamic-form-data.service';

describe('DynamicFormDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicFormDataService = TestBed.get(DynamicFormDataService);
    expect(service).toBeTruthy();
  });
});
