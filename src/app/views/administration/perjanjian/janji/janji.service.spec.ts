import { TestBed } from '@angular/core/testing';

import { JanjiService } from './janji.service';

describe('JanjiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JanjiService = TestBed.get(JanjiService);
    expect(service).toBeTruthy();
  });
});
