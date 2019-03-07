import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Movie4TonightPage } from './movie4-tonight.page';

const routes: Routes = [
  {
    path: 'movie4-tonight',
    component: Movie4TonightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Movie4TonightPage]
})
export class Movie4TonightPageModule {}
