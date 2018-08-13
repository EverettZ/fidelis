import { Component, OnInit, Input } from '@angular/core';
import { IAlertGroup } from '../../models/alert-group';
import { Router, ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'fidelisui-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: [ './alert-box.component.scss' ]
} )
export class AlertBoxComponent implements OnInit {

  alertGroupValue: IAlertGroup;
  alertGroupTitleKey: string;
  alertGroupTotal: number;

  @Input( 'alertGroup' )
  set alertGroup( val: IAlertGroup ) {

    this.alertGroupTotal = 0;
    this.alertGroupTitleKey = val.title.replace( ' ', '' );
    this.alertGroupValue = val;
    this.alertGroupValue.fields
      .forEach( element => {

        if ( element.param === undefined ) {
          element.param = {};
        }

        element.param[ this.alertGroupTitleKey ] = element.name;

        this.alertGroupTotal += element.count;

      } );

  }

  get alertGroup() {
    return this.alertGroupValue;
  }


  constructor ( private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

  }

}
