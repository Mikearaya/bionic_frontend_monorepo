import { async, TestBed } from '@angular/core/testing';
import { StorageLocationsModule } from './storage-locations.module';

describe('StorageLocationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StorageLocationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StorageLocationsModule).toBeDefined();
  });
});
