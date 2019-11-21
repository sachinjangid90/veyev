import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.scss']
})
export class LoveComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  likeCloseModal()
  {
    this.modalController.dismiss();
  }
}
