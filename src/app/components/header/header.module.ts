import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';


@NgModule({
    
    exports: [
        HeaderComponent
    ],
    
    entryComponents: [
    ],
    providers: [],
    declarations: [
        HeaderComponent
            ],
        imports: [
            CommonModule,
            IonicModule,
            RouterModule
        ],
       
      
})

export class HeaderModule {
}
