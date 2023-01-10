import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempleteModule } from './templete/templete.module';
import { HomeComponent } from './home/home.component';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TempleteModule,
    UsuarioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
