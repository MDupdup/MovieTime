import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globalization } from '@ionic-native/globalization';

import 'rxjs/add/operator/map';
import { Category } from '../../models/Category';


/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

	public resultJson;
	public userLanguage;
    public movieDetail;
    public movieId;

	constructor(private http: HttpClient, private globalization: Globalization) {
        // Get user device language
		this.globalization.getPreferredLanguage()
		.then(res => {
			this.userLanguage = res.value;
			console.log(res);
		})
		.catch(e => {
			console.log(e);
			this.userLanguage = "fr-FR"; // Default language
        });    
    }       

    setMovieId(id: number) {
        this.movieId = id;
    }

	listMoviesInTheaters(page) {
        return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=d7fa07760d9dbe9ef1e9b01020d9da15&language=" + this.userLanguage + '&page=' + page);
    }

	getMovieById() {
        return this.http.get("http://api.themoviedb.org/3/movie/" + this.movieId + "?api_key=d7fa07760d9dbe9ef1e9b01020d9da15&language=" + this.userLanguage);
    }
    
    searchForMovie(name: string, page: number) {
        return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=d7fa07760d9dbe9ef1e9b01020d9da15&language=' + this.userLanguage + '&query=' + name + '&page=' + page);
    }

    getCategory(){
        return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d7fa07760d9dbe9ef1e9b01020d9da15&language=' + this.userLanguage);
    }

    complexeSearchForMovie(year: number, categories: [number], langs: [String], page: number) {
        let myUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=d7fa07760d9dbe9ef1e9b01020d9da15&language=' + this.userLanguage + '&sort_by=popularity.desc&page=' + page;
        myUrl += year ? '&primary_release_year=' + year : ''
        myUrl += categories && categories.length ? '&with_genres=' + categories.toString() : ''
        myUrl += langs && langs.length ? '&with_original_language=' + langs.toString() : ''
        console.log(myUrl)
        return this.http.get(myUrl);
    }

}
