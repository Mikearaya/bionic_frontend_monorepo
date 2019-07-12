import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDashboardComponent } from './rent-dashboard.component';

describe('RentDashboardComponent', () => {
  let component: RentDashboardComponent;
  let fixture: ComponentFixture<RentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentDashboardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
