import { async, TestBed } from '@angular/core/testing';
import { SystemUsersApiModule } from './system-users-api.module';

describe('SystemUsersApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SystemUsersApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SystemUsersApiModule).toBeDefined();
  });
});
