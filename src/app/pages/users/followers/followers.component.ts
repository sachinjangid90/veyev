import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GalleryPopoverComponent } from 'src/app/components/gallery-popover/gallery-popover.component';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  follower = true;
  redColored = true;
  otherColored = false;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openPopover() {
    const modal = await this.modalController.create({
      component: GalleryPopoverComponent, 
      cssClass:'openPopoverCss' 
    });
    return await modal.present();
  }

  followers(){
    this.follower = true;
    this.redColored = true;
    this.otherColored = false;
    
  }
  following(){
    this.follower = false;
    this.redColored = false;
    this.otherColored = true;
    
  }
} 
