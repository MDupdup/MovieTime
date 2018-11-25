import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globalization } from '@ionic-native/globalization';

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

	constructor(private http: HttpClient, private globalization: Globalization) {
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

	listMoviesInTheaters() {
		this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=d7fa07760d9dbe9ef1e9b01020d9da15&language=" + this.userLanguage)
			.subscribe(data => {
				this.resultJson = data["results"];
		});
		return this.resultJson;	
	}


	getMovieById(id: number) {
		console.log(id);

		/*this.http.get("http://api.themoviedb.org/3/movie/" + id + "?api_key=d7fa07760d9dbe9ef1e9b01020d9da15&language=" + this.userLanguage)
			.subscribe(data => {
				this.movieDetail = data;
		});*/
	}

}
