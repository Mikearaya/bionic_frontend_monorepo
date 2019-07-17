import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversSelectorComponent } from './drivers-selector.component';

describe('DriversSelectorComponent', () => {
  let component: DriversSelectorComponent;
  let fixture: ComponentFixture<DriversSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
