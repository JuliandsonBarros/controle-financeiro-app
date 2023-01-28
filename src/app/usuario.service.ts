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

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  update(usuario: Usuario): Observable<any> {
    const url = `${this.baseUrl}/${usuario.id_usuario}`;
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }
  
  read(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  readById(id: number): Observable<Usuario>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Usuario>(url); 
  }

  delete(usuario: Usuario): Observable<Usuario>{
    const url = `${this.baseUrl}/${usuario.id_usuario}`;
    return this.http.delete<Usuario>(url);
  }
}
