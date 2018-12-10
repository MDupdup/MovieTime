import { Component } from '@angular/core';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the SearchMovieComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-movie',
  templateUrl: 'search-movie.html'
})
export class SearchMovieComponent {

  text: string;

  constructor(public mProvider: MoviesProvider) {
    
  }

  public ngOnInit() {
      //this.mProvider.getMovieById()
  }

}
