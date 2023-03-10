import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from '../usuarioModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioSelecionado!: Usuario;
  pesquisarTexto = "";
  mensagemSucesso: string | undefined;
  mensagemErro: string | undefined;;

  constructor(private service: UsuarioService, private router: Router){  
  }

  ngOnInit(): void {
   this.service
   .read()
   .subscribe(resposta => this.usuarios = resposta );
  }

  novaConsulta(){
    this.router.navigate(['/usuario/form']);  
  }

  preparaDelecao(usuario: Usuario){
    this.usuarioSelecionado = usuario;
  } 

  deletarCliente(){
    this.service
      .delete(this.usuarioSelecionado)
      .subscribe(resposta => 
          this.mensagemSucesso = 'Cliente deletado com sucesso!',
          erro => this.mensagemErro = 'Ocorreu um erro ao deletar Cliente!'
          
      )
  }

}
