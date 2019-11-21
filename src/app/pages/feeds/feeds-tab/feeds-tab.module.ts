import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeedsTabPage } from './feeds-tab.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { RecommendModule } from 'src/app/components/recommend/recommend.module';

const routes: Routes = [
  {
    path: '',
    component: FeedsTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RecommendModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedsTabPage],
  entryComponents:[]
})
export class FeedsTabPageModule {}
