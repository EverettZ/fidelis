import { Component, OnInit, OnDestroy, EventEmitter, Input } from '@angular/core';
import { AlertsService } from '../../services/alerts/alerts.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { IAlert } from '../../models/alert';
import { ActivatedRoute, Router, Params } from '../../../../../node_modules/@angular/router';

@Component( {
  selector: 'fidelisui-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: [ './alerts.component.scss' ]
} )
export class AlertsComponent implements OnInit, OnDestroy {

  alerts$: Observable<IAlert[]>;
  _alerts$: Subject<IAlert[]> = new Subject();

  filters: Params;
  routeWatchSub: Subscription;
  getAlertsSub: Subscription;

  constructor ( private _alert: AlertsService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {

    this.alerts$ = this._alerts$;

    this.getAlerts();

    this.routeWatchSub = this.activatedRoute.queryParams
      .subscribe( queries => {

        if ( Object.keys( queries ).length > 0 ) {
          this.filters = queries;
        } else {
          this.filters = undefined;
        }

      } );
  }

  ngOnDestroy() {

    if ( this.routeWatchSub && !this.routeWatchSub.closed ) {
      this.routeWatchSub.unsubscribe();
    }

    if ( this.getAlertsSub && !this.getAlertsSub.closed ) {
      this.getAlertsSub.unsubscribe();
    }

  }

  getAlerts() {

    this.getAlertsSub = this._alert.getAlerts()
      .subscribe( alerts => {

        this._alerts$.next( alerts );


      } );

  }


}
