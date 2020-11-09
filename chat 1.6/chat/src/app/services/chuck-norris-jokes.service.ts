import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisJokesService {

  constructor(private httpClient: HttpClient) { }

  getChuckNorrisJoke() {
    return this.httpClient.get('https://api.chucknorris.io/jokes/random?category=dev');
  }
}
