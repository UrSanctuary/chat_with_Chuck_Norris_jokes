import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'YAIzaSyA3HA191GRXxeeYFItZ0vPspI2aiTW2ldY',
  databaseURL: 'https://chat-demo-7b56f.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
