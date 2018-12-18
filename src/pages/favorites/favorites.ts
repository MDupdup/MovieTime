import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Movie } from '../../models/Movie';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

    favMoviesList: Movie[] = [];

  constructor(public navCtrl: NavController, private sProvider: StorageProvider) {

  }

    onInit() {
        this.favMoviesList = this.sProvider.getFavList();
        console.log("C'est par là");
    }


  ionViewWillEnter() {
    this.favMoviesList = this.sProvider.getFavList();

    console.log("On y arrive");
  }

  displayDBItems() {

    console.log('list in fav before', this.favMoviesList);

    this.favMoviesList = this.sProvider.getFavList();

    /*this.nativeStorage.getItem('favorites').then(data => {
        this.favMoviesList = [];
        data.forEach(e => {
            console.log('Le film dans la liste ', e)
            this.favMoviesList.push(
                new Movie(e.id, e.title, e.overview, e.poster_path, e.release_date, e.vote_average)
            );
        });

        console.log('lolilol:', this.favMoviesList);
    });*/
  }
}
