import { TestBed } from '@angular/core/testing';

import { GroceriesService } from './groceries.service';

describe('GroceriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroceriesService = TestBed.get(GroceriesService);
    expect(service).toBeTruthy();
  });
});
