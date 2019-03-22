import { TestBed } from '@angular/core/testing';

import { PerjanjianService } from './perjanjian.service';

describe('PerjanjianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerjanjianService = TestBed.get(PerjanjianService);
    expect(service).toBeTruthy();
  });
});
