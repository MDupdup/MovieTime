import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, NavController, AlertController, ViewController} from 'ionic-angular';
import {Movie} from '../../models/Movie';
import {MoviesProvider} from '../../providers/movies/movies';
import {StorageProvider} from '../../providers/storage/storage';
import {TranslateProvider} from '../../providers/translate/translate';

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html'
})
export class FavoritesPage {
    favMoviesList: Movie[] = [];
    @ViewChild(Nav) nav: Nav;

    constructor(private sProvider: StorageProvider, public mProvider: MoviesProvider, public alert: AlertController, public t: TranslateProvider) {

    }

    ionViewDidEnter() {
        this.sProvider.getFavList().then((x) => this.favMoviesList = x);
    }

    public deleteMovieFromList(movie: Movie) {
        const alert = this.alert.create({
            title: this.t.__('Are you sure about that?'),
            subTitle: this.t.__('Do you really want to delete the movie ') + '<span style="font-weight: bold;">' + movie.getTitle() + '</span> ' + this.t.__(' of your favorites?'),
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
        alert.present();
    }
}
