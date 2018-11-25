import { Component } from '@angular/core';

/**
 * Generated class for the MovieApiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-api',
  templateUrl: 'movie-api.html'
})
export class MovieApiComponent {

  text: string;

  constructor() {
    console.log('Hello MovieApiComponent Component');
    this.text = 'Hello World';
  }

}
