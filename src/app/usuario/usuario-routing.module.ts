import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioReadComponent } from './usuario-read/usuario-read.component';

const routes: Routes = [
  { path : 'usuario-form', component : UsuarioFormComponent },
  { path : 'usuario-read', component : UsuarioReadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
