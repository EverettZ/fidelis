import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsContainerComponent } from './components/alerts-container/alerts-container.component';

const routes: Routes = [
  {
    path: 'alerts',
    component: AlertsContainerComponent
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
