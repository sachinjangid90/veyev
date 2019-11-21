import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GalleryPopoverComponent } from 'src/app/components/gallery-popover/gallery-popover.component';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';
// import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
// import { GalleryComponent } from 'src/app/pages/users/gallery/gallery.component';
// import { FollowersComponent } from 'src/app/pages/users/followers/followers.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  showItem:boolean;
  constructor(public modalController: ModalController) { 
    this.showItem = true;
  }

  ngOnInit() {
  }

  
 
  //job post
  async openPopover() {
    const modal = await this.modalController.create({
      component: GalleryPopoverComponent, 
      cssClass:'openPopoverCss' 
    });
    return await modal.present();
  }

  //edit profile
  async editProfile() {
    const modal = await this.modalController.create({
      component: EditProfileComponent,
      cssClass:'editProfileCss'   
    });
    return await modal.present();
  }

   //gallery
  //  async galleryModal() {
  //   const modal = await this.modalController.create({
  //     component: GalleryComponent,
  //     cssClass:'galleryCss'
  //   });
  //   return await modal.present();
  // }

   //follower
  //  async followerModal() {
  //   const modal = await this.modalController.create({
  //     component: FollowersComponent,
  //     cssClass:'followerCss'
  //   });
  //   return await modal.present();
  // }
  getItem(){
    this.showItem = !this.showItem;
  }
}
