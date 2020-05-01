import { TestBed } from '@angular/core/testing';

import { ConnectedListService } from './connected-list.service';

describe('ConnectedListService', () => {
  let service: ConnectedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
