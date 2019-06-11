import { async, TestBed } from '@angular/core/testing';
import { PageInformationsModule } from './page-informations.module';

describe('PageInformationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PageInformationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PageInformationsModule).toBeDefined();
  });
});
