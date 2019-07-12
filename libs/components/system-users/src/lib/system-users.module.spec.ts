import { async, TestBed } from '@angular/core/testing';
import { SystemUsersModule } from './system-users.module';

describe('SystemUsersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SystemUsersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SystemUsersModule).toBeDefined();
  });
});
