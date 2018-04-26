import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';

import {User} from '../bean/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
  private userUrl = 'api/users';

  constructor(private http: HttpClient) { }

  /**GET user by username*/
 // getUser<Data>(username: string, password: string): Observable<User> {
 //   const url = `${this.userUrl}/?username=${username}`;
 //   return
 //  }

  /**GET username existence of users */
  getUser(username: string): Observable<User> {
    if (!username.trim()) {
      return of('');
    }
    const url = `${this.userUrl}/?username=${username}`;
    return this.http.get<User[]>(url)
      .pipe(
        map(users => users[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          console.log(`${outcome} user username=${username}`);
        }),
        catchError(this.hadnleError<User>(`getUser username=${username}`))
      );
  }
  /**
   *处理失败的HTTP操作。
   *让应用程序继续。
   *@param operation -操作失败的名称
   *@param result -可选值作为可观察结果返回
   */
  private handlError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }




}
