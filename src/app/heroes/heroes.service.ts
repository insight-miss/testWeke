import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Hero} from '../Hero';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable()
export class HeroesService {

  constructor(private http: HttpClient) { }

  addHero (hero: Hero): Observable<Hero> {
    const heroesUrl = environment.baseUrl + 'heros';
    return this.http.post<Hero>(heroesUrl, hero, httpOptions)
      .pipe(
        catchError(this.handlerError)
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

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }
  )
};
