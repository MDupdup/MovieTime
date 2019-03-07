import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { Movie4TonightPage } from '../movie4-tonight/movie4-tonight.page';
import { FavoritesPage } from '../favorites/favorites.page';
import { TranslateProvider } from '../../providers/translate/translate.service';
import {Component} from '@angular/core';

@Component({
    templateUrl: 'tabs.page.html'
})
export class TabsPage {

    tab1Root = FavoritesPage;
    tab2Root = SearchPage;
    tab3Root = Movie4TonightPage;

    constructor(public t: TranslateProvider, public network: Network, public toastCtrl: ToastController) {
        let disconnectSub = this.network.onDisconnect().subscribe(() => {
            this.toastCtrl.create({
                message: "Lost connection to the Internet :(",
                duration: 4000,
                position: 'bottom'
            });
        });

        let connectSub = this.network.onConnect().subscribe(() => {
            this.toastCtrl.create({
                message: "Back online!",
                duration: 4000,
                position: 'bottom'
            });
        });
    }
}
