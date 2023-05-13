import { TestBed } from '@angular/core/testing';

import { CurrentMayorsService } from './current-mayors.service';

describe('CurrentMayorsService', () => {
  let service: CurrentMayorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentMayorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
