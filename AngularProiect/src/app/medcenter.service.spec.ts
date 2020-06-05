import { TestBed } from '@angular/core/testing';

import { MedcenterService } from './medcenter.service';

describe('MedcenterService', () => {
  let service: MedcenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedcenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
