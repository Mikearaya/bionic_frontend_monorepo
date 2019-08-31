import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupSelectorComponent } from './item-group-selector.component';

describe('ItemGroupSelectorComponent', () => {
  let component: ItemGroupSelectorComponent;
  let fixture: ComponentFixture<ItemGroupSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGroupSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGroupSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
