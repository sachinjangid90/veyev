import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  recommendCloseModal()
  {
    this.modalController.dismiss();
  }
}
