import { async, TestBed } from '@angular/core/testing';
import { RentDashBoardApiModule } from './rent-dash-board-api.module';

describe('RentDashBoardApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RentDashBoardApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RentDashBoardApiModule).toBeDefined();
  });
});
