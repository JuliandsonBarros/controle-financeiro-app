import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarioModel';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})

export class UsuarioFormComponent implements OnInit{

  
  usuario: Usuario;
  success: boolean = false;
  erros: String[] = [];
  
  constructor( private service: UsuarioService){
    this.usuario = new Usuario();
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
    .salvar(this.usuario)
    .subscribe(response => {
      this.erros = [];
     this.success = true;
    }, erroResponse =>{
      this.success = false;
      this.erros = erroResponse.error.erros;
    })
  }
}
