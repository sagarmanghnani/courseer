import { TestBed } from '@angular/core/testing';

import { DatabaseOpService } from './database-op.service';

describe('DatabaseOpService', () => {
  let service: DatabaseOpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseOpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
