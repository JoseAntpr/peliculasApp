import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmImage'
})
export class FilmImagePipe implements PipeTransform {

  transform(film: any): any {

    const url = 'https://image.tmdb.org/t/p/w500' ;
    console.log(film);

    if ( film.backdrop_path ) {
      console.log(url + film.backdrop_path);
      return url + film.backdrop_path;
    } else if ( film.poster_path ) {
      return url + film.poster_path;
    } else {
      return 'assets/img/no-image.jpg';
    }

  }

}
