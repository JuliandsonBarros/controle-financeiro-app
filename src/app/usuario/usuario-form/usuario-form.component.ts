import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarioModel';
import { UsuarioService } from '../../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})

export class UsuarioFormComponent implements OnInit{

  
  usuario: Usuario;
  success: boolean = false;
  erros: String[] = [];

  id?: number;
  
  constructor( private service: UsuarioService,
       private router: Router,
       private  active: ActivatedRoute){
    this.usuario = new Usuario();
    
  }

  ngOnInit(): void {
    this.active.params.subscribe(resposta => {
      this.findUsuario(resposta['id']);
      console.log(resposta);
    })
  }

  voltarListagem(){
    this.router.navigate(['/usuario-read']);
  }

  onSubmit(){
    if(this.id){
      this.service
        .update(this.usuario)
        .subscribe(resposta => {
          this.success = true
          this.erros == null;
        },erroResponse => {
          this.erros = ['Erro ao atulualizar o cliente.']
        })

    }else{
      this.service
       .create(this.usuario)
       .subscribe(response => {
        this.erros = [];
        this.success = true;
      }, erroResponse =>{
        this.success = false;
        this.erros = erroResponse.error.erros;
     })
   }
  }

  findUsuario(id: number): void{
    if(id != null){
      this.service.readById(id).subscribe(resposta =>{
        this.usuario = resposta;
      })
    }
  }
}
