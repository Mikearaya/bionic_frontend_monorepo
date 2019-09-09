import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BionicToolbarComponent } from './bionic-toolbar.component';

describe('BionicToolbarComponent', () => {
  let component: BionicToolbarComponent;
  let fixture: ComponentFixture<BionicToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BionicToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BionicToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
