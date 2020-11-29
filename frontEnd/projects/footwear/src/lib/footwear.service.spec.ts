import { TestBed } from '@angular/core/testing';

import { FootwearService } from './footwear.service';

describe('FootwearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootwearService = TestBed.get(FootwearService);
    expect(service).toBeTruthy();
  });
});
