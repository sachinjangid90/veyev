import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardTabPage } from './dashboard-tab.page';
import { CustomComponentModule } from 'src/app/components/custom-component.module';
import { HeaderModule } from 'src/app/components/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponentModule,
    HeaderModule,

    RouterModule.forChild(routes)
  ],
  declarations: [DashboardTabPage]
})
export class DashboardTabPageModule {}
