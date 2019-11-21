import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecommendComponent } from 'src/app/components/recommend/recommend.component';
@Component({
  selector: 'app-feeds-tab',
  templateUrl: './feeds-tab.page.html',
  styleUrls: ['./feeds-tab.page.scss'],
})
export class FeedsTabPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async recommendModal() {
    const modal = await this.modalController.create({
      component: RecommendComponent,
      cssClass:'recommendCss'
    });
    return await modal.present();
  }

  
}


