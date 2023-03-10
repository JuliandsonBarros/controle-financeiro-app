import { EmprestimoService } from './emprestimo.service';
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
import { PesquisarPipe } from './pesquisar.pipe';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutenticacaoComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TempleteModule,
    UsuarioModule,
    EmprestimoModule
   
  ],
  providers: [
    UsuarioService,
    EmprestimoService,
    PesquisarPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
