import { Component, Input } from '@angular/core';
import { MoviesProvider } from '../../providers/movies/movies';
import { StorageProvider } from '../../providers/storage/storage';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { TranslateProvider } from '../../providers/translate/translate';
import { Movie } from '../../models/Movie';

/**
 * Generated class for the MovieItemListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'movie-item-list',
    templateUrl: 'movie-item-list.html'
})
export class MovieItemListComponent {
    @Input() movie: Movie;
    @Input() fav: boolean;

    constructor(public mProvider: MoviesProvider, public sProvider: StorageProvider, public favs: FavoritesPage, public t: TranslateProvider) {
        this.movie = new Movie(0, "Undefined", null, null, null, 0)
        this.fav = false
    }

}
