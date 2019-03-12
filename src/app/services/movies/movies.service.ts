import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globalization} from '@ionic-native/globalization/ngx';
import {config} from '../../../assets/config';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    public userLanguage;
    public movieId;
    private api;

    constructor(private http: HttpClient, private globalization: Globalization) {
        // Get user device language
        this.globalization.getPreferredLanguage()
            .then(res => {
                this.userLanguage = res.value;
                console.log(res);
            })
            .catch(e => {
                console.log(e);
                this.userLanguage = 'fr-FR'; // Default language
            });
        this.api = config.movieApi;
    }

    setMovieId(id: number) {
        this.movieId = id;
    }

    listMoviesInTheaters(page) {
        return this.http.get(this.generateUrl('/movie/now_playing', {page: page}));
    }

    getMovieById() {
        return this.http.get(this.generateUrl('/movie/' + this.movieId, null));
    }

    searchForMovie(name: string, page: number) {
        return this.http.get(this.generateUrl('/search/movie', {query: name, page: page}));
    }

    getCategory() {
        return this.http.get(this.generateUrl('/genre/movie/list', null));
    }

    complexeSearchForMovie(year: number, categories: [number], langs: [String], page: number) {
        return this.http.get(this.generateUrl('/discover/movie',
            {
                sort_by: 'popularity.desc',
                page: page,
                primary_release_year: year,
                with_genres: categories ? categories.toString() : null,
                with_original_language: langs ? langs.toString() : null
            }
        ));
    }

    private generateUrl(route: string, args) {
        let res = [];
        for (let i in args) {
            if (args[i]) {
                res.push(encodeURI(i) + '=' + encodeURI(args[i]).replace(/\&/g, '%26').replace(/\?/g, '%3F'));
            }
        }
        return this.api.baseUrl + route + '?api_key=' + this.api.key + '&language=' + this.userLanguage + '&' + res.join('&');
    }

}
