import { TestBed } from '@angular/core/testing';

import { RedutorUrlService } from './redutor-url.service';

describe('RedutorUrlService', () => {
  let service: RedutorUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedutorUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
