import {Component, OnInit} from '@angular/core';
import {MoviesProvider} from '../../providers/movies/movies.service';
import {Movie} from '../../../models/Movie';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';
import {TranslateProvider} from '../../providers/translate/translate.service';

@Component({
    selector: 'page-search',
    templateUrl: 'search.page.html'
})
export class SearchPage implements OnInit {
    page = 1;
    movies: Movie[] = [];
    noMoreMovies = false;

    localSearch;
    searching;

    searchSub;
    theatersSub;


    constructor(public mProvider: MoviesProvider, public qrScanner: QRScanner, public t: TranslateProvider) {

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
        this.searchSub = this.mProvider.searchForMovie(this.localSearch, this.page).subscribe(response => {
            let newMovies = response['results'].map(movie =>
                new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
            );
            this.noMoreMovies = !newMovies.length;
            this.movies = this.movies.concat(newMovies);
            this.searching = false;
        });
    }

    private getMoviesInTheaters() {
        this.searching = true;

        this.theatersSub = this.mProvider.listMoviesInTheaters(this.page).subscribe(response => {
            let newMovies = response['results'].map(movie =>
                new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
            );
            this.noMoreMovies = !newMovies.length;
            this.movies = this.movies.concat(newMovies);
            this.searching = false;
        });
    }

    public getMore() {
        this.page++;
        if (this.localSearch) {
            this.getMovieBySearch()
        } else {
            this.getMoviesInTheaters()
        }
    }

    ngOnDestroy(): void {
        this.searchSub.unsubscribe();
        this.theatersSub.unsubscribe();
    }
}
