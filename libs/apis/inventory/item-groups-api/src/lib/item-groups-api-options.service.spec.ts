import { TestBed } from '@angular/core/testing';

import { ItemGroupsApiOptionsService } from './item-groups-api-options.service';

describe('ItemGroupsApiOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemGroupsApiOptionsService = TestBed.get(ItemGroupsApiOptionsService);
    expect(service).toBeTruthy();
  });
});
