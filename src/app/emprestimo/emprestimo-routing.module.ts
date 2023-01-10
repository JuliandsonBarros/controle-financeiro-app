import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmprestimoFormComponent } from './emprestimo-form/emprestimo-form.component';
import { EmprestimoReadComponent } from './emprestimo-read/emprestimo-read.component';

const routes: Routes = [
  { path : 'emprestimo-form', component : EmprestimoFormComponent},
  { path : 'emprestimo-read', component : EmprestimoReadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimoRoutingModule { }
