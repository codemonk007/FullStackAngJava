import { TestBed } from '@angular/core/testing';

import { UiHometownService } from './ui-hometown.service';

describe('UiHometownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiHometownService = TestBed.get(UiHometownService);
    expect(service).toBeTruthy();
  });
});
