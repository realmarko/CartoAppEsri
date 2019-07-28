import { TestBed } from '@angular/core/testing';

import { DataStoragePropertyService } from './data-storage-property.service';

describe('DataStoragePropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStoragePropertyService = TestBed.get(DataStoragePropertyService);
    expect(service).toBeTruthy();
  });
});
