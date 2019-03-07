import { Component, Input } from '@angular/core';
import {MoviesProvider} from '../../providers/movies/movies.service';
import {StorageProvider} from '../../providers/storage/storage.service';
import {FavoritesPage} from '../../pages/favorites/favorites.page';
import {TranslateProvider} from '../../providers/translate/translate.service';

/**
 * Generated class for the MovieItemListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'movie-item-list',
    templateUrl: 'movie-item-list.component.html'
})
export class MovieItemListComponent {
    @Input() movie: string;
    @Input() fav: boolean;

    constructor(public mProvider: MoviesProvider, public sProvider: StorageProvider, public favs: FavoritesPage, public t: TranslateProvider) {}

}
