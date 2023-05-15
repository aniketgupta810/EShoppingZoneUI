import { TestBed } from '@angular/core/testing';

import { Authentication } from './authentication';

describe('AuthGuard', () => {
  let guard: Authentication;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Authentication);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
