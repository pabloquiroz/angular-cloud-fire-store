import { TestBed, async, inject } from '@angular/core/testing';

import { AuthServiceGuard } from './auth-service.guard';

describe('AuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceGuard]
    });
  });

  it('should ...', inject([AuthServiceGuard], (guard: AuthServiceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
