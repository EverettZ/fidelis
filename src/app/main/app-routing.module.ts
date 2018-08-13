import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';

const routes: Routes = [
  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'alerts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
