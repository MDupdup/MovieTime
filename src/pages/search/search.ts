import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { Movie } from '../../models/Movie';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Platform } from 'ionic-angular';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage implements OnInit {
    page = 1
    movies: Movie[] = [];
    noMoreMovies = false

    localSearch;
    nresults;
    searching;

    constructor(public navCtrl: NavController, public mProvider: MoviesProvider, public qrScanner: QRScanner) {
       
    }

    public ngOnInit() {
        this.getMoviesInTheaters();
        this.searching = true;
    }

    public onSearch(searchValue: string) {
        this.searching = true;
        // if field is same as before, exit the function (optimization purpose)
        if (this.localSearch === searchValue) return;
        this.page = 1;
        this.movies = [];
        // If field is empty, display movies in theaters
        if (searchValue === '') {
            this.localSearch = '';
            this.getMoviesInTheaters();
        } else {
            this.localSearch = searchValue;
            this.getMovieBySearch();
        }
    }

    public getMovieBySearch() {
        this.mProvider.searchForMovie(this.localSearch, this.page).subscribe(response => {
            let newMovies = response['results'].map(movie =>
                new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
            )
            this.noMoreMovies = newMovies.length ? false : true
            this.movies = this.movies.concat(newMovies);
            this.searching = false;
        });
    }

    private getMoviesInTheaters() {
        this.searching = true;

        this.mProvider.listMoviesInTheaters(this.page).subscribe(response => {
            let newMovies = response['results'].map(movie =>
                new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
            );
            this.noMoreMovies = newMovies.length ? false : true
            this.movies = this.movies.concat(newMovies);
            this.searching = false;
        });
    }

    public getMore() {
        this.page++
        if (this.localSearch) {
            this.getMovieBySearch()
        } else {
            this.getMoviesInTheaters()
        }
    }
}
