import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FavoritesPage} from './pages/favorites/favorites.page';
import {SearchPage} from './pages/search/search.page';
import {Movie4tonightPage} from './pages/movie4tonight/movie4tonight.page';
import {DetailPage} from './pages/detail/detail.page';
import {QrscannerPage} from './pages/qrscanner/qrscanner.page';

@NgModule({
    declarations: [
        AppComponent,
        FavoritesPage,
        SearchPage,
        Movie4tonightPage,
        DetailPage,
        QrscannerPage
    ],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicModule, HttpClientModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
