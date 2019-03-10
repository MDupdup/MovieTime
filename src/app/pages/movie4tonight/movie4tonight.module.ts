import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {Movie4tonightPage} from './movie4tonight.page';

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
        RouterModule.forChild(routes)
    ],
    declarations: [Movie4tonightPage]
})
export class Movie4tonightPageModule {
}
