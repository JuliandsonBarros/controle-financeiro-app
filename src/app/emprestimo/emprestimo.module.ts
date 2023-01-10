import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprestimoRoutingModule } from './emprestimo-routing.module';
import { EmprestimoFormComponent } from './emprestimo-form/emprestimo-form.component';
import { EmprestimoReadComponent } from './emprestimo-read/emprestimo-read.component';


@NgModule({
  declarations: [
    EmprestimoFormComponent,
    EmprestimoReadComponent
  ],
  imports: [
    CommonModule,
    EmprestimoRoutingModule
  ]
})
export class EmprestimoModule { }
