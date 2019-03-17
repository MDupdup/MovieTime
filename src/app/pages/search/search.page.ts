import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MoviesService} from '../../services/movies/movies.service';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';
import {Movie} from '../../models/Movie';
import {TranslateService} from '../../services/translate/translate.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    page = 1;
    movies: Movie[] = [];
    noMoreMovies = false;

    localSearch;
    searching;

    searchForMovieSub;
    listMoviesInTheaters;

    constructor(public router: Router, public mProvider: MoviesService, public qrScanner: QRScanner, public t: TranslateService) {

    }

    public ngOnInit() {
        this.getMoviesInTheaters();
        this.searching = true;
    }

    /**
     * When user enters characters in the search bar, call either getMoviesInTheaters() or getMovieBySearch()
     * @param searchValue
     */
    public onSearch(searchValue: string) {
        this.searching = true;
        // if field is same as before, exit the function (optimization purpose)
        if (this.localSearch === searchValue) {
            return;
        }
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

    /**
     * Get a list of movies corresponding to the user search
     */
    public getMovieBySearch() {
        this.searchForMovieSub = this.mProvider.searchForMovie(this.localSearch, this.page).subscribe(response => {
            const newMovies = response['results'].map(movie =>
                new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
            );
            this.noMoreMovies = !newMovies.length;
            this.movies = this.movies.concat(newMovies);
            this.searching = false;
        });
    }

    /**
     * Get current movies in theaters, when nothing is typed in the search bar yet
     */
    private getMoviesInTheaters() {
        this.searching = true;

        this.listMoviesInTheaters = this.mProvider.listMoviesInTheaters(this.page).subscribe(response => {
            const newMovies = response['results'].map(movie =>
                new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
            );
            this.noMoreMovies = !newMovies.length;
            this.movies = this.movies.concat(newMovies);
            this.searching = false;
        });
    }

    /**
     * GetMore button at bottom of the movie list, to load more movies
     */
    public getMore() {
        this.page++;
        if (this.localSearch) {
            this.getMovieBySearch();
        } else {
            this.getMoviesInTheaters();
        }
    }

    public toQRCode() {
        this.router.navigateByUrl("/qrcode");
    }

    ionViewWillLeave() {
        if (this.searchForMovieSub) {
            this.searchForMovieSub.unsubscribe();
        }
        if (this.listMoviesInTheaters) {
            this.listMoviesInTheaters.unsubscribe()
        }
    }
}
