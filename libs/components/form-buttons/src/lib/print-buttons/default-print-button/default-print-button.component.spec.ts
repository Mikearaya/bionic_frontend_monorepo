import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPrintButtonComponent } from './default-print-button.component';

describe('DefaultPrintButtonComponent', () => {
  let component: DefaultPrintButtonComponent;
  let fixture: ComponentFixture<DefaultPrintButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPrintButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPrintButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
