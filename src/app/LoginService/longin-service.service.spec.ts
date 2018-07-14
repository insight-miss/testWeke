import { TestBed, inject } from '@angular/core/testing';

import { LonginServiceService } from './longin-service.service';

describe('LonginServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LonginServiceService]
    });
  });

  it('should be created', inject([LonginServiceService], (service: LonginServiceService) => {
    expect(service).toBeTruthy();
  }));
});
