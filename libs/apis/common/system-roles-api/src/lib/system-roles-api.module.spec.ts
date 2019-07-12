import { async, TestBed } from '@angular/core/testing';
import { SystemRolesApiModule } from './system-roles-api.module';

describe('SystemRolesApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SystemRolesApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SystemRolesApiModule).toBeDefined();
  });
});
