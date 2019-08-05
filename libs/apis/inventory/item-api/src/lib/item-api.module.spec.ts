import { async, TestBed } from '@angular/core/testing';
import { ItemApiModule } from './item-api.module';

describe('ItemApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ItemApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ItemApiModule).toBeDefined();
  });
});
