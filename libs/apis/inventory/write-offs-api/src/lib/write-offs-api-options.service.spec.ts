import { TestBed } from '@angular/core/testing';

import { WriteOffsApiOptionsService } from './write-offs-api-options.service';

describe('WriteOffsApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WriteOffsApiOptionsService = TestBed.get(WriteOffsApiOptionsService);
    expect(service).toBeTruthy();
  });
});
