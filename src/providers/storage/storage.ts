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

    constructor(public nativeStorage: NativeStorage) {
    }

    setFavList(movieList: Movie[]) {
        this.nativeStorage.setItem('favorites', {
            movies: movieList
        });
    }

    async getFavList() {
        await this.nativeStorage.getItem('favorites')
            .then(data => {
                console.log(data)
                this.favList = data.movies.map(e => {
                    return new Movie(e._id, e._title, e._overview, e._posterPath, e._releaseDate, e._voteAvg);
                });
                console.log(this.favList)
            })
            .catch(err => {
                console.error('Excuse me what the fuck (', err, ')');
            });
        ;
        return this.favList;
    }

    addMovieToList(movie: Movie) {
        this.favList.push(movie)
        this.nativeStorage.setItem('favorites', {
            movies: this.favList
        })
            .then(() => console.log(movie.title, "successfully stored in the db!"))
            .catch(err => console.error('Error setting the movie', movie.title, 'in the db! (', err, ')'));
    }

    deleteMovieFromList(id: any) {
        let movieToDelete = this.favList.findIndex(x => x.id === id);
        let deletedElem = this.favList.splice(movieToDelete, 1);
        this.setFavList(this.favList);
    }

    isMovieInDb(movie: Movie) {
        return this.favList.find(x => x.id === movie.id)
    }

    clearDB() {
        this.nativeStorage.clear();
    }
}
