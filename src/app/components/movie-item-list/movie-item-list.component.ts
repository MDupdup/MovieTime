import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from '../../models/Movie';
import {MoviesService} from '../../services/movies/movies.service';
import {TranslateService} from '../../services/translate/translate.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-movie-item-list',
    templateUrl: './movie-item-list.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./movie-item-list.component.scss'],
})
export class MovieItemListComponent implements OnInit {

    @Input() movie: Movie;
    @Input() fav: boolean;

    constructor(public mProvider: MoviesService, public t: TranslateService, public router: Router) {
        this.movie = new Movie(0, 'Undefined', null, null, null, 0);
        this.fav = false;
    }

    detail(id: number) {
        this.mProvider.setMovieId(id);
        this.router.navigateByUrl("/detail");
    }

    ngOnInit() {
    }
}
