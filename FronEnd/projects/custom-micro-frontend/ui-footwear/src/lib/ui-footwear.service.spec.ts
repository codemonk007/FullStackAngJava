import { TestBed } from '@angular/core/testing';

import { UiFootwearService } from './ui-footwear.service';

describe('UiFootwearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiFootwearService = TestBed.get(UiFootwearService);
    expect(service).toBeTruthy();
  });
});
