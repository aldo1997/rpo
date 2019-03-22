import { TestBed } from '@angular/core/testing';

import { PerkembanganService } from './perkembangan.service';

describe('PerkembanganService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerkembanganService = TestBed.get(PerkembanganService);
    expect(service).toBeTruthy();
  });
});
