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
    searching;
    movie: Movie;
    movieListInDB: Movie[] = []

    constructor(public navCtrl: NavController, public navParams: NavParams, public mProvider: MoviesProvider, private alertPopup: AlertController, private sProvider: StorageProvider) { }

    ngOnInit() {
        this.searching = true
        this.mProvider.getMovieById().subscribe(movie => {
            this.movie = new Movie(movie['id'], movie['title'], movie['overview'], movie['poster_path'], movie['release_date'], movie['vote_average'], movie['original_language'], movie['genres'], movie['runtime']);
            this.searching = false
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
