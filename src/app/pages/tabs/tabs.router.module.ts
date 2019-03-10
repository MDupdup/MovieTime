import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'favorites',
                children: [
                    {
                        path: '',
                        loadChildren: '../favorites/favorites.module#FavoritesPageModule'
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: '../search/search.module#SearchPageModule'
                    }
                ]
            },
            {
                path: 'movie4tonight',
                children: [
                    {
                        path: '',
                        loadChildren: '../movie4tonight/movie4tonight.module#Movie4tonightPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/search',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/search',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
