import { async, TestBed } from '@angular/core/testing';
import { CustomerModule } from './customer.module';

describe('CustomerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerModule).toBeDefined();
  });
});
