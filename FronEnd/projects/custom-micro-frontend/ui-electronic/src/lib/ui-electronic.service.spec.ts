import { TestBed } from '@angular/core/testing';

import { UiElectronicService } from './ui-electronic.service';

describe('UiElectronicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiElectronicService = TestBed.get(UiElectronicService);
    expect(service).toBeTruthy();
  });
});
