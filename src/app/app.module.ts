import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalvusDevicesComponent } from './components/salvus-devices/salvus-devices.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2OdometerModule } from 'ng2-odometer';


@NgModule({
  declarations: [
    AppComponent,
    SalvusDevicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2OdometerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


