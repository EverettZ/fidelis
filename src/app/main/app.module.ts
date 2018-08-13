import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertsFilterPipe } from './pipes/alerts-filter/alerts-filter.pipe';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/mock/in-memory-data.service.ts/in-memory-data.service';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AlertsFilterComponent } from './components/alerts-filter/alerts-filter.component';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertsFilterPipe,
    AlertsComponent,
    AlertsFilterComponent,
    AlertBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      { dataEncapsulation: false }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
