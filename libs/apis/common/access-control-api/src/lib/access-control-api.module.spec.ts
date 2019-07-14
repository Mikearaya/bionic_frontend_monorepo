import { async, TestBed } from '@angular/core/testing';
import { AccessControlApiModule } from './access-control-api.module';

describe('AccessControlApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccessControlApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccessControlApiModule).toBeDefined();
  });
});
