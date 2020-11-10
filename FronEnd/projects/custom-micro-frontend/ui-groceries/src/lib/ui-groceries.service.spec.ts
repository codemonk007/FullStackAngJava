import { TestBed } from '@angular/core/testing';

import { UiGroceriesService } from './ui-groceries.service';

describe('UiGroceriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiGroceriesService = TestBed.get(UiGroceriesService);
    expect(service).toBeTruthy();
  });
});
