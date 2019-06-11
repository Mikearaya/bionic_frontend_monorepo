import { async, TestBed } from '@angular/core/testing';
import { SecurityServiceModule } from './security-service.module';

describe('SecurityServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SecurityServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SecurityServiceModule).toBeDefined();
  });
});
