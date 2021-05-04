import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinosComponent } from './destinos/destinos.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SaltaComponent } from './destinos/salta/salta.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinosComponent,
    PaquetesComponent,
    ContactoComponent,
    SaltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    SaltaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
