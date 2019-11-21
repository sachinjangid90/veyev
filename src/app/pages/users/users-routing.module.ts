import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { IonicModule } from '@ionic/angular';
import { TimelinesComponent } from './timelines/timelines.component';
import { FollowersComponent } from './followers/followers.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'timelines', component:TimelinesComponent},
  {path:'followers', component:FollowersComponent},
  {path:'gallery', component:GalleryComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
