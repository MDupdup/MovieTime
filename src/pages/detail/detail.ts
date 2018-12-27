import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { Movie } from '../../models/Movie';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
})
export class DetailPage {
    movie: Movie;
    movieListInDB: Movie[] = []

    constructor(public navCtrl: NavController, public navParams: NavParams, public mProvider: MoviesProvider, private alertPopup: AlertController, private sProvider: StorageProvider) { }

    ngOnInit() {
        // let tempMovie = {
        //     adult: false,
        //     backdrop_path: "/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg",
        //     belongs_to_collection: null,
        //     budget: 160000000,
        //     genres: [
        //         { id: 28, name: "Action" },
        //         { id: 14, name: "Fantastique" },
        //         { id: 878, name: "Science-Fiction" },
        //         { id: 12, name: "Aventure" }
        //     ],
        //     homepage: "http://www.aquamanmovie.com",
        //     id: 297802,
        //     imdb_id: "tt1477834",
        //     original_language: "en",
        //     original_title: "Aquaman",
        //     overview: "Personnage légendaire depuis 70 ans, Aquaman est le Roi des Sept Mers, régnant à contrecœur sur Atlantis. Pris en étau entre les Terriens qui détruisent constamment la mer et les habitants d'Atlantis prêts à se révolter, Aquaman doit protéger la planète tout entière…",
        //     popularity: 616.683,
        //     poster_path: "/fBfrd2GPTawZjxaBt63zDa2t5hL.jpg",
        //     production_companies: [
        //         { id: 429, logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png", name: "DC Comics", origin_country: "US" }
        //     ],
        //     production_countries: [
        //         { iso_3166_1: "AU", name: "Australia" },
        //         { iso_3166_1: "US", name: "United States of America" }
        //     ],
        //     release_date: "2018-12-07",
        //     revenue: 364800000,
        //     runtime: 143,
        //     spoken_languages: [
        //         { iso_639_1: "en", name: "English" }
        //     ],
        //     status: "Released",
        //     tagline: "",
        //     title: "Aquaman",
        //     video: false,
        //     vote_average: 7,
        //     vote_count: 636
        // }
        // this.movie = 
        //     new Movie(
        //         tempMovie['id'], 
        //         tempMovie['title'], 
        //         tempMovie['overview'], 
        //         tempMovie['poster_path'], 
        //         tempMovie['release_date'], 
        //         tempMovie['vote_average'],
        //         tempMovie['original_language'],
        //         tempMovie['genres'], 
        //         tempMovie['runtime']
        //     );
        //     console.log(this.movie)
        this.mProvider.getMovieById().subscribe(movie => {
            this.movie = new Movie(movie['id'], movie['title'], movie['overview'], movie['poster_path'], movie['release_date'], movie['vote_average'], movie['original_language'], movie['genres'], movie['runtime']);
            console.log(this.movie.getTitle(), this.movie.getPosterPath());
        });
    }

    public addToFavorites(movie: Movie) {
        //console.log(this.nativeStorage.getItem(movie.getId() + ''))
        if (movie.getTitle() === "bite") {
            const alert = this.alertPopup.create({
                title: 'Erreur !',
                subTitle: 'Le film ' + movie.getTitle() + ' est déjà dans votre liste de favoris !',
                buttons: ['Annuler']
            });
            alert.present();
        } else {
            const confirm = this.alertPopup.create({
                title: 'Ajouter ce film aux favoris ?',
                message: movie.getTitle(),
                buttons: [
                    {
                        text: 'Non',
                        handler: () => { }
                    },
                    {
                        text: 'Oui',
                        handler: () => {
                            console.log("Quoi", movie)
                            this.sProvider.addMovieToList(movie);
                            /*this.nativeStorage.getItem('favorites').then(data => {
                                console.log('movies in detail :', data.movie)
                                data.movie.forEach(e => {
                                    console.log('details movies in foreach', e);
                                    this.movieListInDB.push(
                                        new Movie(e.id, e.title, e.overview, e.poster_path, e.release_date, e.vote_average)
                                    )
                                });
                            });
    
                            this.movieListInDB.push(movie);
    
    
                            this.nativeStorage.clear();
                            console.log('concou', this.movieListInDB);
    
                            this.nativeStorage.setItem('favorites', {
                                movie: this.movieListInDB
                            }).then(() => console.log('Successfully added movie in db!'))
                            .catch(
                                error => console.error("Error inserting to db! (", error, ")") 
                            );*/
                        }
                    }
                ]
            });
            confirm.present();
        }
    }
}
