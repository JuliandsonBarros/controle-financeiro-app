import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioReadComponent } from './usuario-read/usuario-read.component';

const routes: Routes = [
  { path : 'usuario', component : LayoutComponent, children: [
    
    { path : 'form', component : UsuarioFormComponent },
    { path : 'form/:id', component : UsuarioFormComponent },
    { path : 'read', component : UsuarioReadComponent },
    { path : 'usuario', redirectTo: 'usuario/read', pathMatch: 'full' }
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
