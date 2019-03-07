import {Component} from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import {MoviesProvider} from '../../providers/movies/movies.service';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';

/**
 * Generated class for the QrscannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-qrscanner',
    templateUrl: 'qrscanner.page.html',
})
export class QrscannerPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public mProvider: MoviesProvider, public qrScanner: QRScanner) {
    }

    ionViewDidLoad() {
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    this.qrScanner.show();
                    window.document.querySelector('ion-app').classList.add('cameraView');

                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        this.navCtrl.pop();
                        this.navCtrl.navigateRoot('/detail');
                        this.mProvider.setMovieId(parseInt(text));

                        this.qrScanner.hide();
                        scanSub.unsubscribe();
                        //window.document.querySelector('ion-app').classList.remove('cameraView');
                    });
                } else if (status.denied) {
                    // camera permission was permanently denied
                } else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error is', e));
    }

    ionViewWillLeave() {
        window.document.querySelector('ion-app').classList.remove('cameraView');
    }

}
