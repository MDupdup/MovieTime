import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/Movie';
import {MoviesService} from '../../services/movies/movies.service';
import {FavoritesPage} from '../../pages/favorites/favorites.page';
import {TranslateService} from '../../services/translate/translate.service';

@Component({
  selector: 'app-movie-item-list',
  templateUrl: './movie-item-list.component.html',
  styleUrls: ['./movie-item-list.component.scss'],
})
export class MovieItemListComponent implements OnInit {

  @Input() movie: Movie;
  @Input() fav: boolean;

  constructor(public mProvider: MoviesService,  public favs: FavoritesPage, public t: TranslateService) {
    this.movie = new Movie(0, 'Undefined', null, null, null, 0);
    this.fav = false;
  }
  ngOnInit() {}

}
