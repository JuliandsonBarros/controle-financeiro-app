import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from '../usuarioModel';
import { PesquisarPipe } from 'src/app/pesquisar.pipe';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[] = [];

  pesquisarTexto = "";

  constructor(private service: UsuarioService){  
  }

  ngOnInit(): void {
   this.service
   .read()
   .subscribe(resposta => this.usuarios = resposta );
  }


} 

