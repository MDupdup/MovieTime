import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { Movie4TonightPage } from '../movie4Tonight/movie4Tonight';
import { FavoritesPage } from '../favorites/favorites';
import { TranslateProvider } from '../../providers/translate/translate';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = FavoritesPage;
    tab2Root = SearchPage;
    tab3Root = Movie4TonightPage;
    disconnectSub
    connectSub

    constructor(public t: TranslateProvider, public network: Network, public toastCtrl: ToastController) {
        this.disconnectSub = this.network.onDisconnect().subscribe(() => {
            this.toastCtrl.create({
                message: "Lost connection to the Internet :(",
                duration: 4000,
                position: 'bottom'
            }).present();
        });

        this.connectSub = this.network.onConnect().subscribe(() => {
            this.toastCtrl.create({
                message: "Back online!",
                duration: 4000,
                position: 'bottom'
            }).present();
        });
    }

    ionViewWillLeave() {
        if (this.disconnectSub) this.disconnectSub.unsubscribe();
        if (this.connectSub) this.connectSub.unsubscribe();
    }
}
