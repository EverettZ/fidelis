import { AlertsService } from './../../services/alerts/alerts.service';
import { Pipe, PipeTransform } from '@angular/core';
import { IAlert } from '../../models/alert';
import { IAlertGroup } from '../../models/alert-group';
import { Params } from '../../../../../node_modules/@angular/router';

const BASE_GROUPS: IAlertGroup[] = [
  {
    title: 'Severity',
    fields: []
  },
  {
    title: 'Client IP',
    fields: []
  },
  {
    title: 'Protocol',
    fields: []
  },
  {
    title: 'Client Country',
    fields: []
  }
];

@Pipe( {
  name: 'alertsFilter'
} )
export class AlertsFilterPipe implements PipeTransform {

  constructor ( private _alerts: AlertsService ) {

  }

  transform( alerts: IAlert[] = [], args?: Params ): IAlertGroup[] {

    const result = {};
    this.initializeResultMap( result );
    let count = 0;
    for ( let index = 0; index < alerts.length; index++ ) {
      const element = alerts[ index ];

      let includeElement = true;

      if ( args !== undefined && args !== {} ) {

        Object.keys( args )
          .forEach( key => {
            if ( args[ key ].indexOf( element[ key ] ) < 0 ) {
              includeElement = false;
            }
          } );

      }

      if ( includeElement ) {
        count++;
        this.mapItem( result, element );
      }

    }

    // Convert to array
    const arrayResult: IAlertGroup[] = this.convertToArray( result );
    this._alerts.setNumAlerts( count );
    return arrayResult;

  }

  private initializeResultMap( result: {} ) {

    BASE_GROUPS
      .forEach( group => {

        const groupKey = group.title.replace( ' ', '' );
        result[ groupKey ] = {};

      } );

    return result;
  }

  private convertToArray( result: {} ): IAlertGroup[] {

    return BASE_GROUPS
      .map( group => {

        const groupKey = group.title.replace( ' ', '' );

        const fields = Object.keys( result[ groupKey ] )
          .map( fieldKey => {

            return { name: fieldKey, count: result[ groupKey ][ fieldKey ] };

          } );

        return { title: group.title, fields: fields };

      } );

  }

  private mapItem( result: any, element: IAlert ) {

    BASE_GROUPS
      .forEach( group => {

        const groupKey = group.title.replace( ' ', '' );

        if ( result[ groupKey ][ element[ groupKey ] ] === undefined ) {

          result[ groupKey ][ element[ groupKey ] ] = 0;

        }

        result[ groupKey ][ element[ groupKey ] ]++;

      } );

    return result;
  }

}



