import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RecommendComponent } from './recommend.component';


@NgModule({
    
    exports: [
        RecommendComponent
    ],
    
    entryComponents: [
        RecommendComponent
    ],
    providers: [],
    declarations: [
        RecommendComponent
            ],
        imports: [
            CommonModule,
            IonicModule,
            RouterModule
        ],
       
      
})

export class RecommendModule {
}
