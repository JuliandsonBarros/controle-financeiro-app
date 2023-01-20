import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempleteModule } from './templete/templete.module';
import { HomeComponent } from './home/home.component';
import { UsuarioModule } from './usuario/usuario.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TempleteModule,
    UsuarioModule,
    EmprestimoModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
