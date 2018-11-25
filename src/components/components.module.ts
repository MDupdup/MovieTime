import { NgModule } from '@angular/core';
import { MovieApiComponent } from './movie-api/movie-api';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner';
@NgModule({
	declarations: [MovieApiComponent,
    QrCodeScannerComponent],
	imports: [],
	exports: [MovieApiComponent,
    QrCodeScannerComponent]
})
export class ComponentsModule {}
