import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceViewComponent } from './distance-view.component';

describe('DistanceViewComponent', () => {
  let component: DistanceViewComponent;
  let fixture: ComponentFixture<DistanceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
