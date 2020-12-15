import { TestBed } from '@angular/core/testing';

import { Machine.ServiceService } from './machine.service.service';

describe('Machine.ServiceService', () => {
  let service: Machine.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Machine.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
