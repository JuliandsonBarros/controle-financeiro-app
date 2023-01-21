import { Usuario } from './usuario/usuarioModel';
import { Observable, EMPTY } from 'rxjs';
import { Emprestimo } from './emprestimo/emprestimoModel';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService{

  baseUrl = "http://localhost:8080/emprestimo";
  baseUrlUsuario = "http://localhost:8080/usuario";

  constructor(private http: HttpClient) { }


  salvar(emprestimo : Emprestimo): Observable<Emprestimo>{
    return this.http.post<Emprestimo>(this.baseUrl, emprestimo);
  }

  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrlUsuario);
  }
}
