import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { Category } from '../../models/Category';
import { eachLangs } from '../../../assets/langs';
import { MoviesService } from '../../services/movies/movies.service';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
    selector: 'app-movie4tonight',
    templateUrl: './movie4tonight.page.html',
    styleUrls: ['./movie4tonight.page.scss'],
})
export class Movie4tonightPage implements OnInit {

    searching;
    movies = ["default"];
    categories;
    category = null;
    years = [0];
    year = null
    langs = [{ 'code': "string", 'name': "string" }];
    lang = null
    selectedCategories;
    selectedYear;
    selectedLang;

    page = 1;
    noMoreMovies = false;

    getCategorySub;
    complexeSearchForMovieSub;

    constructor(public mProvider: MoviesService, public t: TranslateService) {
    }

    public ngOnInit() {
        // Setting categories from api
        this.getCategorySub = this.mProvider.getCategory().subscribe(response => {
            this.categories = response['genres'].map(x =>
                new Category(x.id, x.name)
            );
        });
        // Setting years
        for (let i = 2019; i > 1900; i--) {
            this.years.push(i);
        }
        // Setting langs
        this.langs = eachLangs;
    }

    public searchMovies() {
        this.searching = true;

        this.complexeSearchForMovieSub = this.mProvider.complexeSearchForMovie(this.selectedYear,
            this.selectedCategories,
            this.selectedLang,
            this.page).subscribe(response => {
                const newMovies = response['results'].map(movie =>
                    new Movie(movie.id, movie.title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
                );
                this.noMoreMovies = newMovies.length ? false : true;
                this.movies = this.movies.concat(newMovies);
                this.searching = false;
            });
    }

    public getMore() {
        this.page++;
        this.searchMovies();
    }

    public setCategories(categories: [Category]) {
        this.selectedCategories = categories;
        this.movies = [];
        this.searchMovies();
    }

    public setYear(year: number) {
        this.selectedYear = year;
        this.movies = [];
        this.searchMovies();
    }

    public setLangs(lang: [String]) {
        this.selectedLang = lang;
        this.movies = [];
        this.searchMovies();
    }

    ionViewWillLeave() {
        if (this.getCategorySub) {
            this.getCategorySub.unsubscribe();
        }
        if (this.complexeSearchForMovieSub) {
            this.complexeSearchForMovieSub.unsubscribe()
        }
    }
}
