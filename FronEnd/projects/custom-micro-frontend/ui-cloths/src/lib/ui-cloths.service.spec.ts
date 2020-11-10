import { TestBed } from '@angular/core/testing';

import { UiClothsService } from './ui-cloths.service';

describe('UiClothsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiClothsService = TestBed.get(UiClothsService);
    expect(service).toBeTruthy();
  });
});
