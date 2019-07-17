import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversFormComponent } from './drivers-form.component';

describe('DriversFormComponent', () => {
  let component: DriversFormComponent;
  let fixture: ComponentFixture<DriversFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
