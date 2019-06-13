import { async, TestBed } from '@angular/core/testing';
import { CustomersModule } from './customers.module';

describe('CustomersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomersModule).toBeDefined();
  });
});
