import { TestBed } from '@angular/core/testing';

import { NlpApiService } from './nlp-api-service.service';

describe('NlpApiServiceService', () => {
  let service: NlpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NlpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
