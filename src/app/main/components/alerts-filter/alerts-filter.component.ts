import { AlertsService } from './../../services/alerts/alerts.service';
import { IAlertsFilterType } from './../../models/alerts-filter-type';
import { Component, Input, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { AlertsFilterTypesEnum } from '../../models/alerts-filter-types-enum';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component( {
  selector: 'fidelisui-alerts-filter',
  templateUrl: './alerts-filter.component.html',
  styleUrls: [ './alerts-filter.component.scss' ]
} )
export class AlertsFilterComponent implements OnInit, OnDestroy {

  filters: IAlertsFilterType[] = [];
  routeWatchSub: Subscription;
  numAlerts = 0;

  constructor ( private router: Router, private activatedRoute: ActivatedRoute,
    private _alerts: AlertsService ) {

  }

  ngOnInit() {
    const params = {};

    this.routeWatchSub = this.activatedRoute.queryParams
      .subscribe( queries => {

        this.filters = Object.keys( queries )
          .map( key => {
            return { type: key, value: [ queries[ key ] ] } as IAlertsFilterType;
          } );

      } );

  }

  ngOnDestroy() {

    if ( this.routeWatchSub && !this.routeWatchSub.closed ) {
      this.routeWatchSub.unsubscribe();
    }

  }

  reset() {
    this.router.navigate( [ 'alerts' ] );
  }


}
