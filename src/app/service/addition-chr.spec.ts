import { TestBed } from '@angular/core/testing';

import { AdditionChr } from './addition-chr';

describe('AdditionChr', () => {
  let service: AdditionChr;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionChr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
