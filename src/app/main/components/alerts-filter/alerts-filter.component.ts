import { AlertsService } from './../../services/alerts/alerts.service';
import { IAlertsFilterType } from './../../models/alerts-filter-type';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component( {
  selector: 'fidelisui-alerts-filter',
  templateUrl: './alerts-filter.component.html',
  styleUrls: [ './alerts-filter.component.scss' ]
} )
export class AlertsFilterComponent implements OnInit, OnDestroy {

  filters: IAlertsFilterType[] = [];
  routeWatchSub: Subscription;
  get numAlerts() {
    return this._alerts.getNumAlerts();
  }

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
