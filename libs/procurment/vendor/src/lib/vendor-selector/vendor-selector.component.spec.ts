import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSelectorComponent } from './vendor-selector.component';

describe('VendorSelectorComponent', () => {
  let component: VendorSelectorComponent;
  let fixture: ComponentFixture<VendorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
