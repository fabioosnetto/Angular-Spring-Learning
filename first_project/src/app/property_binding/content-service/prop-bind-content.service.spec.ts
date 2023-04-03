import { TestBed } from '@angular/core/testing';

import { PropBindContentService } from './prop-bind-content.service';

describe('PropBindContentService', () => {
  let service: PropBindContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropBindContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
