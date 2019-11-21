import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  commentCloseModal(){
    this.modalController.dismiss();
  }
}
