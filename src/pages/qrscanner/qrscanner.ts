import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the QrscannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-qrscanner',
    templateUrl: 'qrscanner.html',
})
export class QrscannerPage {
    scanSub

    constructor(public navCtrl: NavController, public navParams: NavParams, public mProvider: MoviesProvider, public qrScanner: QRScanner) {
    }

    ionViewDidLoad() {
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    this.qrScanner.show()
                    window.document.querySelector('ion-app').classList.add('cameraView');

                    this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        this.navCtrl.pop();
                        this.navCtrl.push("DetailPage")
                        this.mProvider.setMovieId(parseInt(text))

                        this.qrScanner.hide();
                        this.scanSub.unsubscribe();
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
        if(this.scanSub) this.scanSub.unsubscribe();
        window.document.querySelector('ion-app').classList.remove('cameraView');
    }

}
