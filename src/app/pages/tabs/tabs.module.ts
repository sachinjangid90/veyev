import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'dashboard-tab',
                children: [
                    {
                        path: '',
                        loadChildren: '../dashboard/dashboard-tab/dashboard-tab.module#DashboardTabPageModule'
                    }
                ]
            },
            {
                path: 'prep-tab',
                children: [
                    {
                        path: '',
                        loadChildren: '../prep/prep-tab/prep-tab.module#PrepTabPageModule'
                    }
                ]
            },
            {
                path: 'test-tab',
                children: [
                    {
                        path: '',
                        loadChildren: '../test/test-tab/test-tab.module#TestTabPageModule'
                    }
                ]
            },
            {
                path: 'store-tab',
                children: [
                    {
                        path: '',
                        loadChildren: '../store/store-tab/store-tab.module#StoreTabPageModule'
                    }
                ]
            },
            {
                path: 'feeds-tab',
                children: [
                    {
                        path: '',
                        loadChildren: '../feeds/feeds-tab/feeds-tab.module#FeedsTabPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/dashboard-tab',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
