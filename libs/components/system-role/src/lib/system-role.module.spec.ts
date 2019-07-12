import { async, TestBed } from '@angular/core/testing';
import { SystemRoleModule } from './system-role.module';

describe('SystemRoleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SystemRoleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SystemRoleModule).toBeDefined();
  });
});
