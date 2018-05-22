import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private filmService: PeliculasService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarPelicula (text: string) {
    if (text.length === 0) {
      return;
    }
    this.router.navigate([ 'buscar', text]);
  }

}
