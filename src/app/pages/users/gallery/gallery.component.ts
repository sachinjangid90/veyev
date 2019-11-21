import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GalleryPopoverComponent } from 'src/app/components/gallery-popover/gallery-popover.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  Images = false;
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

  imagesAll(){
    this.Images = false;
    this.redColored = true;
    this.otherColored = false;
  }
  videosAll(){
    this.Images = true;
    this.redColored = false;
    this.otherColored = true;
  }
}
