import {Component, OnInit} from '@angular/core';
import {QRScannerStatus} from '@ionic-native/qr-scanner';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';
import {NavController, NavParams} from '@ionic/angular';
import {MoviesService} from '../../services/movies/movies.service';

@Component({
    selector: 'app-qrscanner',
    templateUrl: './qrscanner.page.html',
    styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {

    constructor(public navCtrl: NavController, public navParams: NavParams, public mProvider: MoviesService, public qrScanner: QRScanner) {
    }

    ionViewDidLoad() {
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    this.qrScanner.show();
                    window.document.querySelector('ion-app').classList.add('cameraView');

                    const scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        this.navCtrl.pop();
                        this.navCtrl.navigateRoot('/detail');
                        this.mProvider.setMovieId(parseInt(text));

                        this.qrScanner.hide();
                        scanSub.unsubscribe();
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

    ngOnInit(): void {
    }

}
