import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  commentCloseModal(){
    this.modalController.dismiss();
  }
}
