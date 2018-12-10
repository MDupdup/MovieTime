import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public mProvider: MoviesProvider, public nativeStorage: NativeStorage) {

  }

  ngOnInit() {
    this.mProvider.getMovieById().subscribe(movie => {
        this.movie = new Movie(movie['id'], movie['title'], movie['overview'], movie['poster_path']);
        console.log(this.movie.getTitle(), this.movie.getPosterPath());
    });
  }

  public addToFavorites(movie: Movie) {
    this.nativeStorage.setItem(movie.getId().toString(), {
        movie: movie
    }).then(
        error => console.error("Error inserting to db! (", error, ")") 
    );
  }
}
