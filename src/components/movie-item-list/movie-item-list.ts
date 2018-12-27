import { Component, Input } from '@angular/core';
import { MoviesProvider } from '../../providers/movies/movies';
import { StorageProvider } from '../../providers/storage/storage';

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
    @Input() movie: string;
    @Input() fav: boolean;

    constructor(public mProvider: MoviesProvider, public sProvider: StorageProvider) {}

}
