import { TestBed } from '@angular/core/testing';

import { DataReadService } from './data-read.service';

describe('DataReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataReadService = TestBed.get(DataReadService);
    expect(service).toBeTruthy();
  });
});
