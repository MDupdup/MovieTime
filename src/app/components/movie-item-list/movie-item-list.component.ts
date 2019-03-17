import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from '../../models/Movie';
import {MoviesService} from '../../services/movies/movies.service';
import {TranslateService} from '../../services/translate/translate.service';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage/storage.service';

@Component({
    selector: 'app-movie-item-list',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './movie-item-list.component.html',
    styleUrls: ['./movie-item-list.component.scss']
})
export class MovieItemListComponent implements OnInit {

    @Input() movie: Movie;
    @Input() fav: boolean;

    constructor(public mProvider: MoviesService, public sProvider: StorageService, public t: TranslateService, public router: Router) {
        this.movie = new Movie(0, 'Undefined', null, null, null, 0);
        this.fav = false;
    }

    /**
     * Set id to send user to corresponding movie's Detail page
     * @param id
     */
    detail(id: number) {
        this.mProvider.setMovieId(id);
        this.router.navigateByUrl("/detail");
    }

    ngOnInit() {
    }
}
