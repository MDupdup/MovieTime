import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { Movie4TonightPage } from '../pages/movie4Tonight/movie4Tonight';
import { FavoritesPage } from '../pages/favorites/favorites';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MoviesProvider } from '../providers/movies/movies';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Globalization } from '@ionic-native/globalization';
import { Camera } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';
import { QRCodeModule } from 'angularx-qrcode';
import { QRScanner } from '@ionic-native/qr-scanner';
import { IonicImageLoader } from 'ionic-image-loader';
import { MovieItemListComponent } from '../components/movie-item-list/movie-item-list';
import { SeparatorComponent } from '../components/separator/separator';
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    Movie4TonightPage,
    FavoritesPage,
    TabsPage,
    MovieItemListComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    QRCodeModule,
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    Movie4TonightPage,
    FavoritesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider,
    Globalization,
    NativeStorage,
    QRScanner,
    Camera,
    StorageProvider,
    FavoritesPage
  ]
})
export class AppModule { }
