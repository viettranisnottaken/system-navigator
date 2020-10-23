import { TestBed } from '@angular/core/testing';

import { SystemNavigatorService } from './system-navigator.service';

describe('SystemNavigatorService', () => {
  let service: SystemNavigatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemNavigatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
