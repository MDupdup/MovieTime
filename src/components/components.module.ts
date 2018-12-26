import { NgModule } from '@angular/core';
import { MovieApiComponent } from './movie-api/movie-api';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner';
import { SearchMovieComponent } from './search-movie/search-movie';
import { MovieItemListComponent } from './movie-item-list/movie-item-list';
import { SeparatorComponent } from './separator/separator';
@NgModule({
    declarations: [
        MovieApiComponent,
        QrCodeScannerComponent,
        SearchMovieComponent,
        MovieItemListComponent,
        SeparatorComponent
    ],
    imports: [],
    exports: [
        MovieApiComponent,
        QrCodeScannerComponent,
        SearchMovieComponent,
        MovieItemListComponent,
        SeparatorComponent
    ]
})
export class ComponentsModule { }
