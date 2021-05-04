import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DestinosComponent } from './destinos/destinos.component';
import { SaltaComponent } from './destinos/salta/salta.component';
import { PaquetesComponent } from './paquetes/paquetes.component';

const routes: Routes = [
  { path: "", redirectTo: "destinos", pathMatch: "full" },
  { path: "destinos", component: DestinosComponent },
  { path: "paquetes", component: PaquetesComponent },
  { path: "salta", component: SaltaComponent }, 
  { path: "contacto", component: ContactoComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
