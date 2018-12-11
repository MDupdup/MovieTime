import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { Movie } from '../../models/Movie';
import { NativeStorage } from '@ionic-native/native-storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public mProvider: MoviesProvider, public nativeStorage: NativeStorage, private alertPopup: AlertController) {

  }

  ngOnInit() {
    this.mProvider.getMovieById().subscribe(movie => {
        this.movie = new Movie(movie['id'], movie['title'], movie['overview'], movie['poster_path'], movie['release_date'], movie['vote_average']);
        console.log(this.movie.getTitle(), this.movie.getPosterPath());
    });
  }

  public addToFavorites(movie: Movie) {

    //console.log(this.nativeStorage.getItem(movie.getId() + ''))

    if (this.nativeStorage.getItem(movie.getId().toString()) === null) {

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
                    handler: () => {}
                },
                {
                    text: 'Oui',
                    handler: () => {
                        this.nativeStorage.setItem('favorites', {
                            movie: movie
                        }).then(
                            error => console.error("Error inserting to db! (", error, ")") 
                        );
                    }
                }
            ]
        });
        confirm.present();
      }

    }
}
