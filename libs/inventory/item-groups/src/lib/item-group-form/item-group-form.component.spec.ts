import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupFormComponent } from './item-group-form.component';

describe('ItemGroupFormComponent', () => {
  let component: ItemGroupFormComponent;
  let fixture: ComponentFixture<ItemGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemGroupFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
