import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationSelectorComponent } from './operation-selector.component';

describe('OperationSelectorComponent', () => {
  let component: OperationSelectorComponent;
  let fixture: ComponentFixture<OperationSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
