import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  shareCloseModal()
  {
    this.modalController.dismiss();
  }
}
