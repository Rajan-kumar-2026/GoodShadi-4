import { TestBed } from '@angular/core/testing';

import { ShadiService } from './shadi.service';

describe('ShadiService', () => {
  let service: ShadiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShadiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
