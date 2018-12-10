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

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {

  }

  ngOnInit() {
    this.nativeStorage.keys().then((keys) => {
        this.favMoviesList = keys.map(key => this.nativeStorage.getItem(key));
    })
  }

}
