import { NgModule } from '@angular/core';
import { MovieApiComponent } from './movie-api/movie-api';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner';
import { SearchMovieComponent } from './search-movie/search-movie';
@NgModule({
	declarations: [MovieApiComponent,
    QrCodeScannerComponent,
    SearchMovieComponent],
	imports: [],
	exports: [MovieApiComponent,
    QrCodeScannerComponent,
    SearchMovieComponent]
})
export class ComponentsModule {}
