import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {Camera} from '@ionic-native/camera/ngx';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {QRCodeModule} from 'angularx-qrcode';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';
import {IonicImageLoader} from 'ionic-image-loader';
import {Network} from '@ionic-native/network/ngx';
import {TabsPage} from './pages/tabs/tabs.page';
import {MovieItemListComponent} from './component/movie-item-list/movie-item-list.component';
import {SeparatorComponent} from './component/separator/separator.component';
import {SearchPage} from './pages/search/search.page';
import {Movie4TonightPage} from './pages/movie4-tonight/movie4-tonight.page';
import {FavoritesPage} from './pages/favorites/favorites.page';
import {MoviesProvider} from './providers/movies/movies.service';
import {StorageProvider} from './providers/storage/storage.service';
import {TranslateProvider} from './providers/translate/translate.service';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {QrscannerPage} from './pages/qrscanner/qrscanner.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@NgModule({
    declarations: [
        AppComponent,
        SearchPage,
        Movie4TonightPage,
        FavoritesPage,
        TabsPage,
        MovieItemListComponent,
        SeparatorComponent,
        QrscannerPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        QRCodeModule,
        IonicImageLoader.forRoot()
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        AppComponent,
        SearchPage,
        Movie4TonightPage,
        FavoritesPage,
        TabsPage,
        QrscannerPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        MoviesProvider,
        NativeStorage,
        QRScanner,
        Camera,
        Network,
        StorageProvider,
        FavoritesPage,
        TranslateProvider
    ]
})
export class AppModule {}
