import { Component, OnInit, OnDestroy, EventEmitter, Input } from '@angular/core';
import { AlertsService } from '../../services/alerts/alerts.service';
import { Observable, Subject } from 'rxjs';
import { IAlert } from '../../models/alert';
import { tap } from 'rxjs/operators';
import { IAlertsFilterType } from '../../models/alerts-filter-type';
import { AlertsFilterTypesEnum } from '../../models/alerts-filter-types-enum';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, ParamMap, Params } from '../../../../../node_modules/@angular/router';
import { HttpParams } from '../../../../../node_modules/@angular/common/http';

@Component({
  selector: 'fidelisui-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit, OnDestroy {

  alerts$: Observable<IAlert[]>;
  _alerts$: Subject<IAlert[]> = new Subject();

  filters: any;

  constructor(private _alert: AlertsService, private activatedRoute: ActivatedRoute, private router: Router) {


    this.alerts$ = this._alerts$
      .pipe(
        tap(ok => {
          console.log('passing aalerts through', ok);
        })
      );


  }

  ngOnInit() {

    this.getAlerts();

  }

  ngOnDestroy() {

    this.alerts$ = undefined;

  }

  getAlerts(): void {

    this._alert.getAlerts()
      .subscribe(alerts => {

        this._alerts$.next(alerts);

        this.activatedRoute.queryParams
          .subscribe(queries => {
            console.log('ALERTS COMPONENT queries', queries);
            this.buildFiltersFromParams(queries);

          });

      });

  }

  buildFiltersFromParams(query: Params) {

    this.filters = query;

  }


}
