import { TestBed } from '@angular/core/testing';

import { ShopsServiceService } from './shops-service.service';

describe('ShopsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopsServiceService = TestBed.get(ShopsServiceService);
    expect(service).toBeTruthy();
  });
});
