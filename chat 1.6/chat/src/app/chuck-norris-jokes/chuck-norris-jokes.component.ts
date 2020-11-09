import { Component, OnInit } from '@angular/core';
import { ChuckNorrisJokesService } from '../services/chuck-norris-jokes.service';
@Component({
  selector: 'app-chuck-norris-jokes',
  templateUrl: './chuck-norris-jokes.component.html',
  styleUrls: ['./chuck-norris-jokes.component.css']
})
export class ChuckNorrisJokesComponent implements OnInit {
  chuckNorrisJoke: any;
  constructor(private jokeService: ChuckNorrisJokesService) { }
  
  ngOnInit(): void {
  }
  getJoke() {
    return this.jokeService.getChuckNorrisJoke().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    );
  }
  handleSuccess(data) {
    this.chuckNorrisJoke = data.value;
    console.log(this.chuckNorrisJoke);
  }
  handleError(error) {
    console.log(error);
  }
}
