import { TestBed } from '@angular/core/testing';

import { StagiareService } from './servicestagiaire.service';

describe('StagiareService', () => {
  let service: StagiareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagiareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
