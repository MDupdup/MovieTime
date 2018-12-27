import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, AlertController, ViewController } from 'ionic-angular';
import { Movie } from '../../models/Movie';
import { MoviesProvider } from '../../providers/movies/movies';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html'
})
export class FavoritesPage {
    favMoviesList: Movie[] = [];
    @ViewChild(Nav) nav: Nav;

    constructor(private sProvider: StorageProvider, public mProvider: MoviesProvider, public alert: AlertController) {

    }

    ionViewDidEnter() {
        this.sProvider.getFavList().then((x)=> this.favMoviesList = x);  
    }

    public deleteMovieFromList(movie: Movie) {
        const alert = this.alert.create({
            title: 'Êtes-vous sûr ?',
            subTitle: 'Souhaitez-vous vraiment supprimer le film <span style="font-weight: bold;">' + movie.getTitle() + '</span> de vos favoris ?',
            buttons: [
                {
                    text: 'Non',
                    handler: () => { }
                },
                {
                    text: 'Oui',
                    handler: () => {
                        this.sProvider.deleteMovieFromList(movie.getId());
                    }
                }
            ]
        });
        alert.present();
    }
}
