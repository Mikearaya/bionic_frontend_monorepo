import { async, TestBed } from '@angular/core/testing';
import { DataGridModule } from './data-grid.module';

describe('DataGridModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataGridModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataGridModule).toBeDefined();
  });
});
