import {Component} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Movie} from '../../../models/Movie';
import {MoviesProvider} from '../../providers/movies/movies.service';
import {StorageProvider} from '../../providers/storage/storage.service';
import {TranslateProvider} from '../../providers/translate/translate.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.page.html',
})
export class DetailPage {
    searching;
    movie: Movie;
    movieListInDB: Movie[] = [];

    subs: any;


    constructor(public mProvider: MoviesProvider, private alertPopup: AlertController, private sProvider: StorageProvider, public t: TranslateProvider) {
    }

    ngOnInit() {
        this.searching = true;
        this.subs = this.mProvider.getMovieById().subscribe(movie => {
            this.movie = new Movie(movie['id'], movie['title'], movie['overview'], movie['poster_path'], movie['release_date'], movie['vote_average'], movie['original_language'], movie['genres'], movie['runtime']);
            this.searching = false;
        });
    }

    public addToFavorites(movie: Movie) {

        if (this.sProvider.isMovieInDb(movie)) {
            const alert = this.alertPopup.create({
                header: this.t.__('Error!'),
                subHeader: this.t.__('The movie ') + '<span style="font-weight: bold;">' + movie.getTitle() + '</span> ' + this.t.__('is already in your favorites list!'),
                buttons: [this.t.__('Cancel')]
            });
            alert.then(res => {
                res.present();
            });
        } else {
            const confirm = this.alertPopup.create({
                header: this.t.__('Add this film to your favorites?'),
                message: movie.getTitle(),
                buttons: [
                    {
                        text: this.t.__('No'),
                        handler: () => {
                        }
                    },
                    {
                        text: this.t.__('Yes'),
                        handler: () => {
                            this.sProvider.addMovieToList(movie);
                        }
                    }
                ]
            });
            confirm.then(res => {
                res.present();
            });
        }
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
