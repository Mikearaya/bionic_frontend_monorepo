import { TestBed } from '@angular/core/testing';

import { WriteOffsApiService } from './write-offs-api.service';

describe('WriteOffsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WriteOffsApiService = TestBed.get(WriteOffsApiService);
    expect(service).toBeTruthy();
  });
});
