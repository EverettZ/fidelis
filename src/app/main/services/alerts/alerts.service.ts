import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAlert } from '../../models/alert';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IAlertsFilterType } from '../../models/alerts-filter-type';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  url = 'api/alerts';

  constructor(private http: HttpClient) { }

  getAlerts() {
    return this.http.get<IAlert[]>(this.url)
      .pipe(
        this.logArray('getAlerts'),
        catchError(this.handleError('getAlerts', []))
      );
  }


  /** GET IAlert by id. Return `undefined` when id not found */
  getIAlertNo404<Data>(id: number): Observable<IAlert> {
    const url = `${this.url}/?id=${id}`;
    return this.http.get<IAlert[]>(url)
      .pipe(
        map(alerts => alerts[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} IAlert id=${id}`);
        }),
        catchError(this.handleError<IAlert>(`getIAlert id=${id}`))
      );
  }

  /** GET IAlert by id. Will 404 if id not found */
  getAlert(id: number): Observable<IAlert> {
    const url = `${this.url}/${id}`;
    return this.http.get<IAlert>(url)
      .pipe(
        tap(_ => this.log(`fetched Alert id=${id}`)),
        catchError(this.handleError<IAlert>(`getAlert id=${id}`))
      );
  }

  /* GET IAlertes whose name contains search term */
  searchAlerts(filters: IAlertsFilterType[]): Observable<IAlert[]> {

    let url = `${this.url}/`;

    filters
      .forEach((filter, index: number) => {
        if (index === 0) {
          url += '?';
        } else {
          url += '&';
        }
        url += `${filter.type}=${filter.value}`;
      });

    return this.http.get<IAlert[]>(url)
      .pipe(
        tap(_ => this.log(`found alerts matching "${JSON.stringify(filters)}"`)),
        catchError(this.handleError<IAlert[]>('searchAlerts', []))
      );
  }

  private log(message: string) {
    console.log(`AlertsService: ${message}`);
  }

  private logArray<T>(operation = 'operation') {

    return tap((value: T[]) => {

      console.group(operation);
      console.log(typeof value);
      console.log(`Length: ${value.length}`);
      console.dir(value);
      console.groupEnd();

    });

  }

  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

      console.error(operation, typeof result, result);

      return of(result as T);

    };

  }
}
