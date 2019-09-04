import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CriticalStockViewComponent } from './critical-stock-view.component';

describe('CriticalStockViewComponent', () => {
  let component: CriticalStockViewComponent;
  let fixture: ComponentFixture<CriticalStockViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CriticalStockViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalStockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
