import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAlert } from '../../models/alert';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IAlertsFilterType } from '../../models/alerts-filter-type';

@Injectable( {
  providedIn: 'root'
} )
export class AlertsService {

  url = 'api/alerts';
  currNumAlerts = 0;

  constructor ( private http: HttpClient ) { }

  getAlerts() {
    return this.http.get<IAlert[]>( this.url )
      .pipe(
        this.logArray( 'getAlerts' ),
        catchError( this.handleError( 'getAlerts', [] ) )
      );
  }

  getAlert( id: number ): Observable<IAlert> {
    const url = `${this.url}/${id}`;
    return this.http.get<IAlert>( url )
      .pipe(
        tap( _ => this.log( `fetched Alert id=${id}` ) ),
        catchError( this.handleError<IAlert>( `getAlert id=${id}` ) )
      );
  }

  private log( message: string ) {
    console.log( `AlertsService: ${message}` );
  }

  private logArray<T>( operation = 'operation' ) {

    return tap( ( value: T[] ) => {

      console.group( operation );
      console.log( typeof value );
      console.log( `Length: ${value.length}` );
      console.dir( value );
      console.groupEnd();

    } );

  }

  private handleError<T>( operation = 'operation', result?: T ) {

    return ( error: any ): Observable<T> => {

      console.error( operation, typeof result, result );

      return of( result as T );

    };

  }

  setNumAlerts( val: number ) {
    this.currNumAlerts = val;
  }

  getNumAlerts() {
    return this.currNumAlerts;
  }

}
