import { TestBed } from '@angular/core/testing';

import { ItemApiService } from './item-api.service';

describe('ItemApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemApiService = TestBed.get(ItemApiService);
    expect(service).toBeTruthy();
  });
});
