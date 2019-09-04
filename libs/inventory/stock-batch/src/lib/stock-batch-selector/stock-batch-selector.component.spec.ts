import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBatchSelectorComponent } from './stock-batch-selector.component';

describe('StockBatchSelectorComponent', () => {
  let component: StockBatchSelectorComponent;
  let fixture: ComponentFixture<StockBatchSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockBatchSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBatchSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
