import { TestBed, inject } from '@angular/core/testing';

import { JobListByPartnerService } from './job-list-by-partner.service';

describe('JobListByPartnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobListByPartnerService]
    });
  });

  it('should be created', inject([JobListByPartnerService], (service: JobListByPartnerService) => {
    expect(service).toBeTruthy();
  }));
});
