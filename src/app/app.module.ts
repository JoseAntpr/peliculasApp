import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// servicios
import { PeliculasService } from './services/peliculas.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilmComponent } from './components/film/film.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routes';
import { BuscarComponent } from './components/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmComponent,
    HomeComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
