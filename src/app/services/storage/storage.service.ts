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

    /**
     * Setter to set the given favorites list as the user's favorites movie list
     * @param movieList
     */
    setFavList(movieList: Movie[]) {
        this.nativeStorage.setItem('favorites', {
            movies: movieList
        });
    }

    /**
     * Return the user's favorite movies list
     */
    async getFavList() {
        await this.nativeStorage.getItem('favorites')
            .then(data => {
                this.favList = data.movies.map(e => {
                    return new Movie(e._id, e._title, e._overview, e._posterPath, e._releaseDate, e._voteAvg);
                });
            })
            .catch(err => {
                console.error('Excuse me what the fuck (', err, ')');
            });

        return this.favList;
    }

    /**
     * Add given movie to the user's favorite movies list
     * @param movie
     */
    addMovieToList(movie: Movie) {
        this.favList.push(movie);

        this.nativeStorage.setItem('favorites', {
            movies: this.favList
        }).then(() => console.log(movie.title, 'successfully stored in the db!'))
            .catch(err => console.error('Error setting the movie', movie.title, 'in the db! (', err, ')'));
    }

    /**
     * Delete movie with the given id from the user's favorite movies list
     * @param id
     */
    deleteMovieFromList(id: any) {
        const movieToDelete = this.favList.findIndex(x => x.id === id);

        const deletedElem = this.favList.splice(movieToDelete, 1);

        this.setFavList(this.favList);
    }

    /**
     * Check whether given movie is already in the user's favorite movies list
     * @param movie
     */
    isMovieInDb(movie: Movie) {
        return this.favList.find(x => x.id === movie.id);
    }

    /**
     * Clear the user's favorite movies list
     * @deprecated
     */
    clearDB() {
        this.nativeStorage.clear();
    }
}
