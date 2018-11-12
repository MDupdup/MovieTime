import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { ContactPage } from '../contact/contact';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavoritesPage;
  tab2Root = SearchPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
