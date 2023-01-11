import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarioModel';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})

export class UsuarioFormComponent implements OnInit{

  usuario: Usuario = {
    nom_usuario: '',
    cod_cpf: '',
    cod_telefone: '',
    nom_email: '',
    perfil: '',
  };

  constructor(){
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.usuario);
  }

}
