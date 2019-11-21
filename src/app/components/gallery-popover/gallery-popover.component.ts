import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gallery-popover',
  templateUrl: './gallery-popover.component.html',
  styleUrls: ['./gallery-popover.component.scss']
})
export class GalleryPopoverComponent implements OnInit {
  // activeTab = 'Text';
  activeTab = 'Text';
 
  textBg:boolean;
  imageBg:boolean;
  videoBg:boolean;

 
  constructor(public modalController: ModalController) { 
    this.textBg = true;
  this.imageBg = false;
  this.videoBg = false;
  }

  ngOnInit() {
  }


    setActiveTab(data){
      
      // setActiveTab(data) {
   this.activeTab = data;
  // }

      if(data === 'Text'){
        this.textBg = true;
        this.imageBg = false;
        this.videoBg = false;
      }
      else if(data === 'Images'){
        this.textBg = false;
        this.imageBg = true;
        this.videoBg = false;
    } 
    else if(data === 'Videos'){
      this.textBg = false;
      this.imageBg = false;
      this.videoBg = true;}
    }
    
    galleryPopOverCloseModal()
  {
    this.modalController.dismiss();
  }
}
