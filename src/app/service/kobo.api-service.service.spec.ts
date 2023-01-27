import { TestBed } from '@angular/core/testing';

import { Kobo_ApiServiceService } from './kobo_api-service.service';

describe('Kobo.ApiServiceService', () => {
  let service: Kobo_ApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kobo_ApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
