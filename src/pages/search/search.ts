import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController, public mProvider: MoviesProvider) {
    console.log("bonjour");
  }

  listMoviesInTheaters() {
    return this.mProvider.listMoviesInTheaters();
  }

}
