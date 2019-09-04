import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMovementFormComponent } from './stock-movement-form.component';

describe('StockMovementFormComponent', () => {
  let component: StockMovementFormComponent;
  let fixture: ComponentFixture<StockMovementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockMovementFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMovementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
