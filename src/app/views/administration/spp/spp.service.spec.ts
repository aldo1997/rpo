import { TestBed } from '@angular/core/testing';

import { SppService } from './spp.service';

describe('SppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SppService = TestBed.get(SppService);
    expect(service).toBeTruthy();
  });
});
