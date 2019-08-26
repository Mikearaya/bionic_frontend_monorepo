import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLookupViewComponent } from './system-lookup-view.component';

describe('SystemLookupViewComponent', () => {
  let component: SystemLookupViewComponent;
  let fixture: ComponentFixture<SystemLookupViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLookupViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLookupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
