import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add function should be present', () => {
    expect(service.add).toBeTruthy();
  });

  it('add function should be present', () => {
    expect(service.add(1,2)).toEqual(3);
  });

});
