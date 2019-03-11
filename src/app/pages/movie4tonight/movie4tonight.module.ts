import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {Movie4tonightPage} from './movie4tonight.page';
import {ComponentsModule} from '../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: Movie4tonightPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
    declarations: [Movie4tonightPage]
})
export class Movie4tonightPageModule {
}
