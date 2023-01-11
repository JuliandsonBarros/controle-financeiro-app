import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioReadComponent } from './usuario-read/usuario-read.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioReadComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule
  ]
})
export class UsuarioModule { }
