import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  pelicula: any;
  regresarA = '';

  constructor(private filmService: PeliculasService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {

      this.regresarA = params['pag'];
      this.filmService.getPelicula( params['id'])
          .subscribe( pelicula => {
            console.log(pelicula);
            this.pelicula = pelicula;
          });
    });
  }

  ngOnInit() {
  }

}
