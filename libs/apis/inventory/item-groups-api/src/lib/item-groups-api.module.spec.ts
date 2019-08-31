import { async, TestBed } from '@angular/core/testing';
import { ItemGroupsApiModule } from './item-groups-api.module';

describe('ItemGroupsApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItemGroupsApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ItemGroupsApiModule).toBeDefined();
  });
});
