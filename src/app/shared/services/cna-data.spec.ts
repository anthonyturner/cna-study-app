import { TestBed } from '@angular/core/testing';

import { CnaData } from './cna-data';

describe('CnaData', () => {
  let service: CnaData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnaData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
