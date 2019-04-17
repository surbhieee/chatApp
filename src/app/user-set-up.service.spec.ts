import { TestBed } from '@angular/core/testing';

import { UserSetUpService } from './user-set-up.service';

describe('UserSetUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSetUpService = TestBed.get(UserSetUpService);
    expect(service).toBeTruthy();
  });
});
