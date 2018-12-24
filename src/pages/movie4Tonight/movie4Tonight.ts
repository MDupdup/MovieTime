import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { Movie } from '../../models/Movie';
import { Category } from '../../models/Category';
import { CastExpr } from '@angular/compiler';

@Component({
    selector: 'page-movie4Tonight',
    templateUrl: 'movie4Tonight.html'
})
export class Movie4TonightPage {
    searching;
    movies = [];
    categories;
    years;
    selectedCategories;
    selectedYear;
    
    page = 1
    noMoreMovies = false

    constructor(public navCtrl: NavController, public mProvider: MoviesProvider) {
        this.years = []
    }

    public ngOnInit() {
        //Setting categories from api
        this.mProvider.getCategory().subscribe(response => {
            this.categories = response['genres'].map(x =>
                new Category(x.id, x.name)
            );
        });
        //Setting years  
        for (let i = 2019; i > 1900; i--) this.years.push(i);
    }

    public searchMovies() {
        this.searching = true

        this.mProvider.complexeSearchForMovie(this.selectedYear, this.selectedCategories, this.page).subscribe(response => {
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
        this.searchMovies()
    }

    public setCategories(categories: [Category]) {
        this.selectedCategories = categories
        this.movies = []
        this.searchMovies()
    }

    public setYear(year: number) {
        this.selectedYear = year
        this.movies = []
        this.searchMovies()
    }

}
