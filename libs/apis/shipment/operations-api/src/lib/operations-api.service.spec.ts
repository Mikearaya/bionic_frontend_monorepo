import { TestBed } from '@angular/core/testing';

import { OperationsApiService } from './operations-api.service';

describe('OperationsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperationsApiService = TestBed.get(OperationsApiService);
    expect(service).toBeTruthy();
  });
});
