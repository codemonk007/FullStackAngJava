import { TestBed } from '@angular/core/testing';

import { ClothsService } from './cloths.service';

describe('ClothsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClothsService = TestBed.get(ClothsService);
    expect(service).toBeTruthy();
  });
});
