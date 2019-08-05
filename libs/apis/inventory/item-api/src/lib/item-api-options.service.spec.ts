import { TestBed } from '@angular/core/testing';

import { ItemApiOptionsService } from './item-api-options.service';

describe('ItemApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemApiOptionsService = TestBed.get(ItemApiOptionsService);
    expect(service).toBeTruthy();
  });
});
