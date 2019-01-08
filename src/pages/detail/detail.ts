import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { Movie } from '../../models/Movie';
import { StorageProvider } from '../../providers/storage/storage';
import { TranslateProvider } from '../../providers/translate/translate';

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public mProvider: MoviesProvider, private alertPopup: AlertController, private sProvider: StorageProvider, public t: TranslateProvider) { }

    ngOnInit() {
        this.searching = true
        this.mProvider.getMovieById().subscribe(movie => {
            this.movie = new Movie(movie['id'], movie['title'], movie['overview'], movie['poster_path'], movie['release_date'], movie['vote_average'], movie['original_language'], movie['genres'], movie['runtime']);
            this.searching = false
        });
    }

    public addToFavorites(movie: Movie) {
        
        if (this.sProvider.isMovieInDb(movie)) {
            const alert = this.alertPopup.create({
                title: this.t.__('Error!'),
                subTitle: this.t.__('The movie ')+'<span style="font-weight: bold;">' + movie.getTitle() + '</span> '+this.t.__('is already in your favorites list!'),
                buttons: [this.t.__('Cancel')]
            });
            alert.present();
        } else {
            const confirm = this.alertPopup.create({
                title: this.t.__('Add this film to your favorites?'),
                message: movie.getTitle(),
                buttons: [
                    {
                        text: this.t.__('No'),
                        handler: () => { }
                    },
                    {
                        text: this.t.__('Yes'),
                        handler: () => {
                            this.sProvider.addMovieToList(movie);
                        }
                    }
                ]
            });
            confirm.present();
        }
    }
}
