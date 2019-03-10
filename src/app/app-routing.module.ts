import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'detail', loadChildren: './pages/detail/detail.module#DetailPageModule'},
    {path: 'favorites', loadChildren: './pages/favorites/favorites.module#FavoritesPageModule'},
    {path: 'movie4tonight', loadChildren: './pages/movie4tonight/movie4tonight.module#Movie4tonightPageModule'},
    {path: 'qrscanner', loadChildren: './pages/qrscanner/qrscanner.module#QrscannerPageModule'},
    {path: 'search', loadChildren: './pages/search/search.module#SearchPageModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
