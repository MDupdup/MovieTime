import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    DetailPage
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
    QRCodeModule
  ],
})
export class DetailPageModule {}
