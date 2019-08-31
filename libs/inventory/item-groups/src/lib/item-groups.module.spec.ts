import { async, TestBed } from '@angular/core/testing';
import { ItemGroupsModule } from './item-groups.module';

describe('ItemGroupsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItemGroupsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ItemGroupsModule).toBeDefined();
  });
});
