import { TestBed } from '@angular/core/testing';

import { UiBooksService } from './ui-books.service';

describe('UiBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiBooksService = TestBed.get(UiBooksService);
    expect(service).toBeTruthy();
  });
});
