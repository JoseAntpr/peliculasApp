import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PeliculasService {

  private apiKey = '5f5fa6b22ea549273fd85bcf70dde268';
  private apiURL = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient ) { }

  getCartelera() {
    const date = new Date();
    const desde = this.dateTransform(new Date());
    date.setDate(date.getDate() + 7);
    const hasta = this.dateTransform(date);

    const url = `${ this.apiURL }/discover/movie?primary_release_date.gte=${desde}&primary_release_date.lte=${hasta}&api_key=${this.apiKey}`;

    return this.http.get( url ).pipe(
      map( (data: any) => {
        return data.results;
      })
    );
  }

  getPopulares() {
    const url = `${ this.apiURL }/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;

    return this.http.get( url ).pipe(
      map( (data: any) => {
        return data.results;
      })
    );
  }

  getPopularesNinos() {
    const url = `${ this.apiURL }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}`;

    return this.http.get( url ).pipe(
      map( (data: any) => {
        return data.results;
      })
    );
  }

  dateTransform(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
}
