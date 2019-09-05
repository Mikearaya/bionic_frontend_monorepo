import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCountViewComponent } from './inventory-count-view.component';

describe('InventoryCountViewComponent', () => {
  let component: InventoryCountViewComponent;
  let fixture: ComponentFixture<InventoryCountViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryCountViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
