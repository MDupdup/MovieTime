import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    DetailPage
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
    QRCodeModule,
    IonicImageLoader
  ],
})
export class DetailPageModule {}
