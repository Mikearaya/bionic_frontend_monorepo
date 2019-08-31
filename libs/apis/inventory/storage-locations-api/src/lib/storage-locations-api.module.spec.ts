import { async, TestBed } from '@angular/core/testing';
import { StorageLocationsApiModule } from './storage-locations-api.module';

describe('StorageLocationsApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StorageLocationsApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StorageLocationsApiModule).toBeDefined();
  });
});
