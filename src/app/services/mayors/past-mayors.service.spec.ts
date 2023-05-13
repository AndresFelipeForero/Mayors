import { TestBed } from '@angular/core/testing';

import { PastMayorsService } from './past-mayors.service';

describe('PastMayorsService', () => {
  let service: PastMayorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastMayorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
