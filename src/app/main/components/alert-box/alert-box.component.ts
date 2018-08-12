import { Component, OnInit, Input } from '@angular/core';
import { IAlertGroup } from '../../models/alert-group';
import { IAlertSortedField } from '../../models/alert-sorted-field';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'fidelisui-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements OnInit {

  @Input('alertGroup') alertGroup: IAlertGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  addFilter(field: IAlertSortedField) {
    const params = {};
    const filterKey = this.alertGroup.title.replace(' ', '');
    this.buildParams(filterKey, params, field);
  }


  private buildParams(filterKey: string, params: {}, field: IAlertSortedField) {
    this.activatedRoute.queryParamMap
      .subscribe(queries => {

        if (queries.keys.length) {

          queries.keys
            .forEach(param => {

              if (param === filterKey) {

                if (!params.hasOwnProperty(filterKey)) {

                  params[filterKey] = [];

                }

                params[filterKey].push(queries.get(param));

              }

            });

        }

        if (!params.hasOwnProperty(filterKey)) {

          params[filterKey] = [];

        }

        params[filterKey].push(field.name);

        const result = { queryParams: params };
        console.log('FINAL PARAMS', params);

        this.router.navigate(['alerts'], result);

      });
  }

}
