import { Component } from '@angular/core';
import { NavController, AlertController, ViewController } from 'ionic-angular';
import { Movie } from '../../models/Movie';
import { MoviesProvider } from '../../providers/movies/movies';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html'
})
export class FavoritesPage {
    favMoviesList: Movie[] = [];

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, private sProvider: StorageProvider, public mProvider: MoviesProvider, public alert: AlertController) {

    }

    onInit() {
        this.favMoviesList = this.sProvider.getFavList();
       
        console.log("C'est par là");
    }

    ionViewDidEnter() {
        this.favMoviesList = this.sProvider.getFavList();

        console.log("On y arrive");

        console.table(this.favMoviesList);        
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
                        this.viewCtrl._didEnter();
                    }
                }
            ]
        });
        alert.present();
    }
}
