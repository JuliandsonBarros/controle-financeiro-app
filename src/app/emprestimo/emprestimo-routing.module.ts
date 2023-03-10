import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoComponent } from '../autenticacao/autenticacao.component';
import { LayoutComponent } from '../layout/layout.component';
import { EmprestimoFormComponent } from './emprestimo-form/emprestimo-form.component';
import { EmprestimoReadComponent } from './emprestimo-read/emprestimo-read.component';

const routes: Routes = [

  { path: 'emprestimo', component : LayoutComponent, children: [
    { path : 'form', component : EmprestimoFormComponent},
    { path : 'read', component : EmprestimoReadComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimoRoutingModule { }
