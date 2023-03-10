import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { HomeComponent  } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UsuarioReadComponent } from './usuario/usuario-read/usuario-read.component';

const routes: Routes = [
  { path: 'login', component: AutenticacaoComponent},
  { path: '', component : LayoutComponent, children: [
    { path : 'Clientes', component : UsuarioReadComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
