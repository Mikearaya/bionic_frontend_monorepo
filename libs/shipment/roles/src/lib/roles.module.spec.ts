import { async, TestBed } from '@angular/core/testing';
import { RolesModule } from './roles.module';

describe('RolesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RolesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RolesModule).toBeDefined();
  });
});
