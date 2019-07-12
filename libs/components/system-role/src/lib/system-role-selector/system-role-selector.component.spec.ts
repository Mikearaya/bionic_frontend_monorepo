import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRoleSelectorComponent } from './system-role-selector.component';

describe('SystemRoleSelectorComponent', () => {
  let component: SystemRoleSelectorComponent;
  let fixture: ComponentFixture<SystemRoleSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemRoleSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemRoleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
