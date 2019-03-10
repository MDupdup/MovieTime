import {Injectable} from '@angular/core';
import {Movie} from '../../models/Movie';
import {NativeStorage} from '@ionic-native/native-storage/ngx';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

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
                this.favList = data.movies.map(e => {
                    return new Movie(e.id, e.title, e.overview, e.posterPath, e.releaseDate, e.voteAvg);
                });
            })
            .catch(err => {
                console.error('Excuse me what the fuck (', err, ')');
            });

        return this.favList;
    }

    addMovieToList(movie: Movie) {
        this.favList.push(movie);

        return this.nativeStorage.setItem('favorites', {
            movies: this.favList
        }).then(() => console.log(movie.title, 'successfully stored in the db!'))
            .catch(err => console.error('Error setting the movie', movie.title, 'in the db! (', err, ')'));
    }

    deleteMovieFromList(id: any) {
        const movieToDelete = this.favList.findIndex(x => x.id === id);

        const deletedElem = this.favList.splice(movieToDelete, 1);

        this.setFavList(this.favList);
    }

    isMovieInDb(movie: Movie) {
        return this.favList.find(x => x.id === movie.id);
    }

    clearDB() {
        this.nativeStorage.clear();
    }
}
