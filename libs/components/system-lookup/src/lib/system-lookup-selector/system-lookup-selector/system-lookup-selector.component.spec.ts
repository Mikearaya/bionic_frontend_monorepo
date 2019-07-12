import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLookupSelectorComponent } from './system-lookup-selector.component';

describe('SystemLookupSelectorComponent', () => {
  let component: SystemLookupSelectorComponent;
  let fixture: ComponentFixture<SystemLookupSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLookupSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLookupSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
