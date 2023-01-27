import { TestBed } from '@angular/core/testing';

import { ServiceKoboService } from './service-kobo.service';

describe('ServiceKoboService', () => {
  let service: ServiceKoboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceKoboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
