import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceFormComponent } from './distance-form.component';

describe('DistanceFormComponent', () => {
  let component: DistanceFormComponent;
  let fixture: ComponentFixture<DistanceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
