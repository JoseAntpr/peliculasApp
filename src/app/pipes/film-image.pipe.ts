import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmImage'
})
export class FilmImagePipe implements PipeTransform {

  transform(film: any, poster: boolean = false): any {

    const url = 'https://image.tmdb.org/t/p/w500' ;

    if ( poster ) {
      return url + film.poster_path;
    }

    if ( film.backdrop_path ) {
      return url + film.backdrop_path;
    } else if ( film.poster_path ) {
      return url + film.poster_path;
    } else {
      return 'assets/img/no-image.jpg';
    }

  }

}
