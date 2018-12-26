import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Movie } from '../../models/Movie';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

    favList: Movie[] = [];

    constructor(public nativeStorage: NativeStorage) {}

    setFavList(movieList: Movie[]) {
        this.nativeStorage.setItem('favorites', {
            movies: movieList
        });
    }

    getFavList() {
        this.nativeStorage.getItem('favorites')
        .then(data => {
            this.favList = data.movies.map(e => {
                console.log(e.title);
                return new Movie(e.id, e.title, e.overview, e.poster_path, e.release_date, e.vote_average);
            });
        })
        .catch(err => {
            console.error('Excuse me what the fuck (', err, ')');
        });

        console.log('Bonjour tout le monde', this.favList);
        
        return this.favList;
    }

    addMovieToList(movie: Movie) {
        this.getFavList();
        
        this.favList.push(movie)

        this.nativeStorage.setItem('favorites', {
            movies: this.favList
        }).then(() => console.log(movie.getTitle(), "successfully stored in the db!"))
          .catch(err => console.error('Error setting the movie', movie.getTitle(), 'in the db! (', err, ')'));
    }

    clearDB() {
        this.nativeStorage.clear();
    }
}
