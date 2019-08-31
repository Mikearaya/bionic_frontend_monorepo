import { TestBed } from '@angular/core/testing';

import { ItemGroupsApiService } from './item-groups-api.service';

describe('ItemGroupsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemGroupsApiService = TestBed.get(ItemGroupsApiService);
    expect(service).toBeTruthy();
  });
});
