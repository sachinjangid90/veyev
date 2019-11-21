import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { IonicModule } from '@ionic/angular';
import { CustomComponentModule } from 'src/app/components/custom-component.module';
import { GalleryPopoverComponent } from 'src/app/components/gallery-popover/gallery-popover.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { TimelinesComponent } from './timelines/timelines.component';
import { FollowersComponent } from './followers/followers.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProfileLinkComponent } from './profile-link/profile-link.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CustomComponentModule,
    UsersRoutingModule,
    HeaderModule
  ],
  declarations: [ProfileComponent, TimelinesComponent, FollowersComponent, GalleryComponent, ProfileLinkComponent],
  entryComponents:[GalleryPopoverComponent]
})
export class UsersModule { }
