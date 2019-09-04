import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMovementViewComponent } from './stock-movement-view.component';

describe('StockMovementViewComponent', () => {
  let component: StockMovementViewComponent;
  let fixture: ComponentFixture<StockMovementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMovementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMovementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
