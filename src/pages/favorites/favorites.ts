import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

    favMoviesList: Movie[] = [];

    movie: Movie;

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {

  }


  ionViewWillEnter() {
    this.displayDBItems();
  }

  displayDBItems() {
    this.nativeStorage.getItem('favorites').then(data => {
        console.log("bonjour", data.movie);
        this.favMoviesList.push(new Movie(data.movie.id, data.movie.title, data.movie.overview, data.movie.poster_path, data.movie.release_date, data.movie.vote_average));
    });
  }

  clearDB() {
    this.nativeStorage.clear();

    this.displayDBItems();
  }
}
