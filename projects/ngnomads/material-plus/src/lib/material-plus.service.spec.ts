import { TestBed } from '@angular/core/testing';

import { MaterialPlusService } from './material-plus.service';

describe('MaterialPlusService', () => {
  let service: MaterialPlusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialPlusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
