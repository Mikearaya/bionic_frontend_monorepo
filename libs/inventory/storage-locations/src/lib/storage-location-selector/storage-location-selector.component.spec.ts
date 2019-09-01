import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageLocationSelectorComponent } from './storage-location-selector.component';

describe('StorageLocationSelectorComponent', () => {
  let component: StorageLocationSelectorComponent;
  let fixture: ComponentFixture<StorageLocationSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageLocationSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageLocationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
