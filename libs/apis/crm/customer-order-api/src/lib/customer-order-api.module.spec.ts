import { async, TestBed } from '@angular/core/testing';
import { CustomerOrderApiModule } from './customer-order-api.module';

describe('CustomerOrderApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerOrderApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerOrderApiModule).toBeDefined();
  });
});
