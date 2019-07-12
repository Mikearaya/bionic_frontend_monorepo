import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUserSelectorComponent } from './system-user-selector.component';

describe('SystemUserSelectorComponent', () => {
  let component: SystemUserSelectorComponent;
  let fixture: ComponentFixture<SystemUserSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemUserSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemUserSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
