import { TestBed, async, inject } from '@angular/core/testing';

import { ActivationGuard } from './activation.guard';

describe('ActivationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivationGuard]
    });
  });

  it('should ...', inject([ActivationGuard], (guard: ActivationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
