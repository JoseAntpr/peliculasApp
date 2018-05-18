import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private filmService: PeliculasService) { }

  ngOnInit() {
    this.filmService.getCartelera().subscribe( data => {
      console.log(data);
    });
  }

}
