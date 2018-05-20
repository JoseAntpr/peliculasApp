import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(private filmService: PeliculasService) { }

  ngOnInit() {
    this.filmService.getCartelera().subscribe( data => this.cartelera = data);
    this.filmService.getPopulares().subscribe( data => this.populares = data);
    this.filmService.getPopularesNinos().subscribe( data => this.popularesNinos = data);
  }

}
