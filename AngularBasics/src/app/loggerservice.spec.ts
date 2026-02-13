import { TestBed } from '@angular/core/testing';

import { Loggerservice } from './loggerservice';

describe('Loggerservice', () => {
  let service: Loggerservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loggerservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
