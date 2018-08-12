import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { IAlertsFilterType } from '../../models/alerts-filter-type';
import { AlertsFilterTypesEnum } from '../../models/alerts-filter-types-enum';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AlertSeverityTypesEnum, AlertSeverityTypes } from '../../models/alert-severity-types-enum';

@Component({
  selector: 'fidelisui-alerts-filter',
  templateUrl: './alerts-filter.component.html',
  styleUrls: ['./alerts-filter.component.scss']
})
export class AlertsFilterComponent implements OnInit {

  @Input('filters') filters = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('on inite?');
    const params = {};

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(val);
        this.activatedRoute.queryParams
          .subscribe(queries => {
            console.log(queries);
          });
      }
    });
  }

  reset() {
    this.router.navigate(['alerts']);
  }


}
