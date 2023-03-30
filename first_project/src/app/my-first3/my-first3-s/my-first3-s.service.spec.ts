import { TestBed } from '@angular/core/testing';

import { MyFirst3SService } from './my-first3-s.service';

describe('MyFirst3SService', () => {
  let service: MyFirst3SService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirst3SService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
