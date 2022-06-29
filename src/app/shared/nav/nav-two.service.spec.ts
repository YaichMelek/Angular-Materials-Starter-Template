import { TestBed } from '@angular/core/testing';

import { NavTwoService } from './nav-two.service';

describe('NavTwoService', () => {
  let service: NavTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
