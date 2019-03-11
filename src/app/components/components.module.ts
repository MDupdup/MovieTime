import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieItemListComponent} from './movie-item-list/movie-item-list.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations: [
        MovieItemListComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        MovieItemListComponent
    ]
})
export class ComponentsModule {
}
