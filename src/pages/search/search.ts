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
    
    localSearch;
    nresults;

  constructor(public navCtrl: NavController, public mProvider: MoviesProvider) {
  }

  public ngOnInit() {
      this.getMoviesInTheaters();
  }

  public onSearch(searchValue: string) {

    // if field is same as before, exit the function (optimization purpose)
    if (this.localSearch === searchValue) return;
    // If field is empty, display movies in theaters
    if(searchValue === '') this.getMoviesInTheaters();

    this.movies = [];

    this.mProvider.searchForMovie(searchValue).subscribe(response => {
        this.nresults = response['total_results'];
        this.movies = response['results'].map(movie => 
            new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
        );
    });

    this.localSearch = searchValue;
  }

  private getMoviesInTheaters() {
    this.movies = [];

    this.mProvider.listMoviesInTheaters().subscribe(response => {
        this.movies = response['results'].map(movie => 
            new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
        );
        console.table(this.movies.map(movie => movie.getTitle()));
    });
  }

}
