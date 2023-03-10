import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent {

  username!: string;
  password!: string;
  loginError!: boolean;
  cadastrando!: boolean;

  constructor(private router: Router){}

  onSubmit(){
    this.router.navigate(['/usuario']);
  }

  preparaCadastro(event: any){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

}
