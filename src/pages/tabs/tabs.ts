import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { Movie4TonightPage } from '../movie4Tonight/movie4Tonight';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavoritesPage;
  tab2Root = SearchPage;
  tab3Root = Movie4TonightPage;

  constructor() {

  }
}
