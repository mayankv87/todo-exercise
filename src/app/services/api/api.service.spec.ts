import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from '../../services/api/api.service';
import { BaseRequestOptions, Http, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AuthService } from '../auth/auth.service';
import { SessionService } from '../session/session.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        ApiService,
        AuthService,
        SessionService
      ]
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
