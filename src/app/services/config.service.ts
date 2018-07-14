import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Config} from '../Config';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) {
  }
  getData() {
    const url = environment.baseUrl + 'test';
    const params = {name: 'fan'};// 传入的参数
    const options = {params: params};
    const s = this.http.get(url, options).toPromise();//返回结果
    return s;
  }
  getConfig() {
    const url = environment.baseUrl + 'test';
    return this.http.get<Config>(url)
      .pipe(
        retry(3) ,
        catchError(this.handlerError)
      );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    const url = environment.baseUrl + 'test';
    return this.http.get<Config>(
      url, {observe: 'response'}
    );
  }

  private handlerError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred`, error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status},` +
        `body was: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}
