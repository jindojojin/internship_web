import { TestBed, inject } from '@angular/core/testing';

import { MessageModalService } from './message-modal.service';

describe('MessageModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageModalService]
    });
  });

  it('should be created', inject([MessageModalService], (service: MessageModalService) => {
    expect(service).toBeTruthy();
  }));
});
