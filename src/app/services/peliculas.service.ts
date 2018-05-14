import { Injectable } from '@angular/core';
import { map } from 'rxjs/operator/map';


@Injectable()
export class PeliculasService {

  private apiKey = '5f5fa6b22ea549273fd85bcf70dde268';
  private apiURL = 'https://api.themoviedb.org/3';

  constructor() { }

}
