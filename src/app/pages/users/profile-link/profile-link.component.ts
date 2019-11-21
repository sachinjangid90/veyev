import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GalleryPopoverComponent } from 'src/app/components/gallery-popover/gallery-popover.component';

@Component({
  selector: 'app-profile-link',
  templateUrl: './profile-link.component.html',
  styleUrls: ['./profile-link.component.scss']
})
export class ProfileLinkComponent implements OnInit {



  constructor(public modalController: ModalController) {
   }

  ngOnInit() {
    
  }
  async openPopover() {
    const modal = await this.modalController.create({
      component: GalleryPopoverComponent, 
      cssClass:'openPopoverCss' 
    });
    return await modal.present();
  }

  
}
