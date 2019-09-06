import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLookupFormComponent } from './system-lookup-form.component';

describe('SystemLookupFormComponent', () => {
  let component: SystemLookupFormComponent;
  let fixture: ComponentFixture<SystemLookupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLookupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLookupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
