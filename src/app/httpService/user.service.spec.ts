import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {TestBed} from '@angular/core/testing';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';

import {asyncData, asyncError} from '../../testing/async-observable-helpers';

import {User} from '../bean/user';
import {UserService} from './user.service';
import {fail} from 'assert';

interface Data {
  name: string;
}

const testUrl = '/data'

describe('HttpClient testing', () => {
  // let httpClientSpy: { get: jasmine.Spy };
  // let userService: UserService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  })

  it('can test HttpClient.get', () => {
    const testData: Data = {name: 'Test Data'}

    httpClient.get<Data>(testUrl)
      .subscribe(data =>
        expect(data).toEqual(testData)
      );

    const req = httpTestingController.expectOne('GET');

    req.flush(testData);
    httpTestingController.verify();
  });
})
