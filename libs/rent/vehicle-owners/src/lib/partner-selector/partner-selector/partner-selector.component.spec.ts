import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSelectorComponent } from './partner-selector.component';

describe('PartnerSelectorComponent', () => {
  let component: PartnerSelectorComponent;
  let fixture: ComponentFixture<PartnerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
