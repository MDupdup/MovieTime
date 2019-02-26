import {Injectable} from '@angular/core';
import {NativeStorage} from '@ionic-native/native-storage';
import {Movie} from '../../models/Movie';

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
        //console.log('BEFORE', this.favList);
        await this.nativeStorage.getItem('favorites')
            .then(data => {
                this.favList = data.movies.map(e => {
                    return new Movie(e.id, e.title, e.overview, e.posterPath, e.releaseDate, e.voteAvg);
                });
            })
            .catch(err => {
                console.error('Excuse me what the fuck (', err, ')');
            });
        ;

        //console.log('AFTER', this.favList);

        return this.favList;
    }

    addMovieToList(movie: Movie) {
        this.favList.push(movie)

        //console.log("Hein", movie);

        this.nativeStorage.setItem('favorites', {
            movies: this.favList
        }).then(() => console.log(movie.getTitle(), "successfully stored in the db!"))
            .catch(err => console.error('Error setting the movie', movie.getTitle(), 'in the db! (', err, ')'));
    }

    deleteMovieFromList(id: any) {
        let movieToDelete = this.favList.findIndex(x => x.getId() === id);

        let deletedElem = this.favList.splice(movieToDelete, 1);

        this.setFavList(this.favList);

        //console.log("Successfully deleted ", deletedElem);
    }

    isMovieInDb(movie: Movie) {
        return this.favList.find(x => x.getId() === movie.getId())
    }

    clearDB() {
        this.nativeStorage.clear();
    }
}
