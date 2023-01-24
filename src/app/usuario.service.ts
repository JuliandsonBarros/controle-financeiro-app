import { Injectable, OnInit } from '@angular/core';
import { Usuario } from './usuario/usuarioModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit{

  baseUrl = "http://localhost:8080/usuario";

  constructor(private http: HttpClient) { 
  }
  ngOnInit(): void {
  }

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }
  
  read(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl);
  }
}
