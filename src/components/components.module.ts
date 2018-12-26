import { NgModule } from '@angular/core';
import { MovieItemListComponent } from './movie-item-list/movie-item-list';
import { SeparatorComponent } from './separator/separator';
@NgModule({
    declarations: [
        MovieItemListComponent,
        SeparatorComponent
    ],
    imports: [],
    exports: [
        MovieItemListComponent,
        SeparatorComponent
    ]
})
export class ComponentsModule { }
