import { TestBed } from '@angular/core/testing';

import { MetCollectionApiService } from './met-collection-api.service';

describe('MetCollectionApiService', () => {
  let service: MetCollectionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetCollectionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
