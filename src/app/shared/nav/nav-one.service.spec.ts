import { TestBed } from '@angular/core/testing';

import { NavOneService } from './nav-one.service';

describe('NavOneService', () => {
  let service: NavOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
