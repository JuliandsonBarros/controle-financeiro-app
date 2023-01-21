import { Usuario } from './../../usuario/usuarioModel';
import { UsuarioService } from './../../usuario.service';
import { Emprestimo } from './../emprestimoModel';
import { EmprestimoService } from './../../emprestimo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprestimo-form',
  templateUrl: './emprestimo-form.component.html',
  styleUrls: ['./emprestimo-form.component.css']
})
export class EmprestimoFormComponent implements OnInit{

  emprestimo = new Emprestimo();
  success: boolean = false;
  erros : String[] = [];
  clientes : Usuario[] = []


  constructor(private emprestimoService : EmprestimoService,
    private usuarioService : UsuarioService){ 
  }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.clientes = usuarios;
    })
   }

  onSubmit(){
    console.log(this.emprestimo)
    this.emprestimoService
    .salvar(this.emprestimo)
    .subscribe(response => {
      this.erros = [];
      this.success = true;
    }, erroResponse =>{
      this.success = false;
      this.erros = erroResponse.error.erros;
    })
  }

  compareObjects(o1 : any , o2 : any) : boolean{
    return o1.nom_usuario === o2.nom_usuario && o1.cod_cpf === o2.cod_cpf;
  }
}
