import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage/storage.service';
import {AlertController} from '@ionic/angular';
import {MoviesService} from '../../services/movies/movies.service';
import {TranslateService} from '../../services/translate/translate.service';
import {Movie} from '../../models/Movie';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.page.html',
    styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

    favMoviesList: Movie[] = [];

    constructor(private sProvider: StorageService, public alert: AlertController, public t: TranslateService) {

    }

    ionViewDidEnter() {
        this.sProvider.getFavList().then((x) => this.favMoviesList = x);
    }

    public async deleteMovieFromList(movie: Movie) {
        const alert = await this.alert.create({
            header: this.t.__('Are you sure about that?'),
            subHeader: this.t.__('Do you really want to delete the movie ') + '<span style="font-weight: bold;">' + movie.title + '</span>' + this.t.__(' of your favorites?'),
            buttons: [
                {
                    text: this.t.__('No'),
                    handler: () => {
                    }
                },
                {
                    text: this.t.__('Yes'),
                    handler: () => {
                        this.sProvider.deleteMovieFromList(movie.id);
                    }
                }
            ]
        });
        return await alert.present();
    }

    ngOnInit() {
        this.sProvider.getFavList().then((x) => this.favMoviesList = x);
    }

}
