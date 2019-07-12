import { async, TestBed } from '@angular/core/testing';
import { RentDashBoardModule } from './rent-dash-board.module';

describe('RentDashBoardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RentDashBoardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RentDashBoardModule).toBeDefined();
  });
});
