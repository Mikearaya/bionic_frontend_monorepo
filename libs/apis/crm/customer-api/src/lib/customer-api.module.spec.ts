import { async, TestBed } from '@angular/core/testing';
import { CustomerApiModule } from './customer-api.module';

describe('CustomerApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerApiModule).toBeDefined();
  });
});
