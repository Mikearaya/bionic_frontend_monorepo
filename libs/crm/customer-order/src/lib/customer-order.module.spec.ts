import { async, TestBed } from '@angular/core/testing';
import { CustomerOrderModule } from './customer-order.module';

describe('CustomerOrderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerOrderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerOrderModule).toBeDefined();
  });
});
