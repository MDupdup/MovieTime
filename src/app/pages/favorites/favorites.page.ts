import { AlertController} from '@ionic/angular';
import {Movie} from '../../../models/Movie';
import {MoviesProvider} from '../../providers/movies/movies.service';
import {StorageProvider} from '../../providers/storage/storage.service';
import {TranslateProvider} from '../../providers/translate/translate.service';
import {Component} from '@angular/core';

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.page.html'
})
export class FavoritesPage {
    favMoviesList: Movie[] = [];

    constructor(private sProvider: StorageProvider, public mProvider: MoviesProvider, public alert: AlertController, public t: TranslateProvider) {

    }

    ionViewDidEnter() {
        this.sProvider.getFavList().then((x) => this.favMoviesList = x);
    }

    public deleteMovieFromList(movie: Movie) {
        const alert = this.alert.create({
            header: this.t.__('Are you sure about that?'),
            subHeader: this.t.__('Do you really want to delete the movie ') + '<span style="font-weight: bold;">' + movie.getTitle() + '</span> ' + this.t.__(' of your favorites?'),
            buttons: [
                {
                    text: this.t.__('No'),
                    handler: () => {
                    }
                },
                {
                    text: this.t.__('Yes'),
                    handler: () => {
                        this.sProvider.deleteMovieFromList(movie.getId());
                    }
                }
            ]
        });
        alert.then(res => {
            res.present();
        });
    }
}
