import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';
import {MoviesService} from '../../services/movies/movies.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-qrscanner',
    templateUrl: './qrscanner.page.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {

    scanSub;

    constructor(public router: Router, public mProvider: MoviesService, public qrScanner: QRScanner) {
    }

    ngOnInit(): void {
    }

    /**
     * Set QRScanner up
     */
    ionViewWillEnter() {
        console.log('hello there');
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    console.log('something');
                    this.qrScanner.show();
                    window.document.querySelector('ion-app').classList.add('cameraView');

                    this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log(text);
                        this.router.navigateByUrl('/detail');
                        this.mProvider.setMovieId(parseInt(text));

                        this.qrScanner.hide();
                        this.scanSub.unsubscribe();
                    });
                } else if (status.denied) {
                    console.log(status);
                    // camera permission was permanently denied
                } else {
                    console.log(status);
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error is', e));
    }

    ionViewWillLeave() {
        if (this.scanSub) {
            this.scanSub.unsubscribe();
        }
        window.document.querySelector('ion-app').classList.remove('cameraView');
    }
}
