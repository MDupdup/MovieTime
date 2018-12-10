import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage implements OnInit {

    movies: Movie[] = [];

  constructor(public navCtrl: NavController, public mProvider: MoviesProvider) {
  }

  public ngOnInit() {
    this.mProvider.listMoviesInTheaters().subscribe((response) => {
        this.movies = response['results'].map(movie => 
            new Movie(movie.id, movie.title, movie.overview, movie.poster_path)
        );
        console.table(this.movies.map(movie => movie.getTitle()));
    });
  }

}
