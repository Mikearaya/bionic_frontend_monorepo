import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupViewComponent } from './item-group-view.component';

describe('ItemGroupViewComponent', () => {
  let component: ItemGroupViewComponent;
  let fixture: ComponentFixture<ItemGroupViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemGroupViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
