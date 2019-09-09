import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurmentDashboardComponent } from './procurment-dashboard.component';

describe('ProcurmentDashboardComponent', () => {
  let component: ProcurmentDashboardComponent;
  let fixture: ComponentFixture<ProcurmentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurmentDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
