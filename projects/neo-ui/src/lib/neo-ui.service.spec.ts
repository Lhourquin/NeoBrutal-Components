import { TestBed } from '@angular/core/testing';

import { NeoUiService } from './services/neo-ui.service';

describe('NeoUiService', () => {
  let service: NeoUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeoUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
