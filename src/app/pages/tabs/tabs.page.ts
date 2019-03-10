import {Component} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Network} from '@ionic-native/network/ngx';
import {TranslateService} from '../../services/translate/translate.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    constructor(public t: TranslateService, public network: Network, public toastCtrl: ToastController) {
        const disconnectSub = this.network.onDisconnect().subscribe(() => {
            this.toastCtrl.create({
                message: 'Lost connection to the Internet :(',
                duration: 4000,
                position: 'bottom'
            });
        });

        const connectSub = this.network.onConnect().subscribe(() => {
            this.toastCtrl.create({
                message: 'Back online!',
                duration: 4000,
                position: 'bottom'
            });
        });
    }
}
