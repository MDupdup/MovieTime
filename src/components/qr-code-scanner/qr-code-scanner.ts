import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello QrCodeScannerComponent Component');
    this.text = 'Hello World';
  }

}
