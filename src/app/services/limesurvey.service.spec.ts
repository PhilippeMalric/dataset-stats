import { TestBed } from '@angular/core/testing';

import { LimesurveyService } from './limesurvey.service';

describe('LimesurveyService', () => {
  let service: LimesurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LimesurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
