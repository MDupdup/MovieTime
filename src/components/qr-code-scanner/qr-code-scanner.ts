import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the QrCodeScannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qr-code-scanner',
  templateUrl: 'qr-code-scanner.html'
})
export class QrCodeScannerComponent {

  text: string;

  constructor(private scanner: QRScanner) {
  
    }

    startScan() {
        this.scanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                // camera permission was granted


                // start scanning
                let scanSub = this.scanner.scan().subscribe((text: string) => {
                    console.log('Scanned something', text);

                    this.scanner.hide(); // hide camera preview
                    scanSub.unsubscribe(); // stop scanning
                });

                } else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
                } else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error: ', e));
    }

}
