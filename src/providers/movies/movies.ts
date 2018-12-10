import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globalization } from '@ionic-native/globalization';

import 'rxjs/add/operator/map';


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
			this.userLanguage = res;
			console.log(res);
		})
		.catch(e => {
			console.log(e)
			this.userLanguage = "fr-FR"; // Default language
        });    
    }
       

    setMovieId(id: number) {
        this.movieId = id;
    }

	listMoviesInTheaters() {
        return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=d7fa07760d9dbe9ef1e9b01020d9da15&language=" + this.userLanguage);
    }


	getMovieById() {
        console.log(this.movieId);
        return this.http.get("http://api.themoviedb.org/3/movie/" + this.movieId + "?api_key=d7fa07760d9dbe9ef1e9b01020d9da15&language=" + this.userLanguage)
	}

}
