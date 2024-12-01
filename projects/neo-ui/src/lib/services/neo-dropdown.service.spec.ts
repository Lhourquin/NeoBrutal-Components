import { TestBed } from '@angular/core/testing';

import { NeoDropdownService } from './neo-dropdown.service';

describe('NeoDropdownService', () => {
  let service: NeoDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeoDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
