import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { GalleryPopoverComponent } from './gallery-popover/gallery-popover.component';
// import { FollowersComponent } from '../pages/users/followers/followers.component';
import { LoveComponent } from './love/love.component';
import { CommentComponent } from './comment/comment.component';
import { ShareComponent } from './share/share.component';
import { HeaderModule } from './header/header.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
    
    exports: [
    
    ],
    
    entryComponents: [
        GalleryPopoverComponent, LoveComponent, CommentComponent, ShareComponent, EditProfileComponent
    ],
    providers: [ScreenOrientation],
    declarations: [
        
        GalleryPopoverComponent,
            
        // TimelineComponent,
            
        // FollowersComponent,
            
        // GalleryComponent,
            
        LoveComponent,
            
        CommentComponent,
            
        ShareComponent,
            
        EditProfileComponent,
            ],
        imports: [
            CommonModule,
            IonicModule,
            HeaderModule
        ],
      
})

export class CustomComponentModule {
}
