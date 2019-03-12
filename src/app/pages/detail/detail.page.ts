import {Component, OnInit} from '@angular/core';
import {Movie} from '../../models/Movie';
import {AlertController} from '@ionic/angular';
import {StorageService} from '../../services/storage/storage.service';
import {TranslateService} from '../../services/translate/translate.service';
import {MoviesService} from '../../services/movies/movies.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    searching;
    movie: Movie;

    getMovieByIdSub;

    constructor(public mProvider: MoviesService,
                private alertPopup: AlertController,
                private sProvider: StorageService,
                public t: TranslateService) {
    }

    ngOnInit() {
        this.searching = true;
        this.getMovieByIdSub = this.mProvider.getMovieById().subscribe(movie => {
            this.movie = new Movie(movie['id'], movie['title'], movie['overview'], movie['poster_path'], movie['release_date'], movie['vote_average'], movie['original_language'], movie['genres'], movie['runtime']);
            this.searching = false;
        });
    }

    public async addToFavorites(movie: Movie) {

        if (this.sProvider.isMovieInDb(movie)) {
            const alert = await this.alertPopup.create({
                header: this.t.__('Error!'),
                subHeader: this.t.__('The movie ') + '<span style="font-weight: bold;">' + movie.title + '</span>' + this.t.__('is already in your favorites list!'),
                buttons: [this.t.__('Cancel')]
            });
            return await alert.present();
        } else {
            const confirm = await this.alertPopup.create({
                header: this.t.__('Add this film to your favorites?'),
                message: movie.title,
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
            return await confirm.present();
        }
    }

    ionViewWillLeave() {
        if(this.getMovieByIdSub) this.getMovieByIdSub.unsubscribe();
    }
}
