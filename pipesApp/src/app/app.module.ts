import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//PrimeNg
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import localeCa from '@angular/common/locales/ca';
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeCa);
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule
   // ButtonModule,
   // CardModule
  ],
  providers: [
    provideClientHydration(),{provide: LOCALE_ID, useValue: 'ca'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
