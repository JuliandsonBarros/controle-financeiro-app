import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import { UsuarioReadComponent } from './usuario/usuario-read/usuario-read.component';

const routes: Routes = [
  { path : 'Clientes', component : UsuarioReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
