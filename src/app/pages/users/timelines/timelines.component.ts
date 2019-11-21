import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoveComponent } from 'src/app/components/love/love.component';
import { CommentComponent } from 'src/app/components/comment/comment.component';
import { ShareComponent } from 'src/app/components/share/share.component';
import { GalleryPopoverComponent } from 'src/app/components/gallery-popover/gallery-popover.component';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  // async openPopover() {
  //   const modal = await this.modalController.create({
  //     component: GalleryPopoverComponent, 
  //     cssClass:'openPopoverCss' 
  //   });
  //   return await modal.present();
  // }


  async loveModal() {
    const modal = await this.modalController.create({
      component: LoveComponent,
      cssClass:'likeCss'
    });
    return await modal.present();
  }
  

  async commentModal() {
    const modal = await this.modalController.create({
      component: CommentComponent,
      cssClass:'commentCss'
    });
    return await modal.present();
  }

  async shareModal() {
    const modal = await this.modalController.create({
      component: ShareComponent,
      cssClass:'shareCss'
    });
    return await modal.present();
  }

}
