import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { ListaFavoritosComponent } from './components/lista-favoritos/lista-favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    ListaFavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
