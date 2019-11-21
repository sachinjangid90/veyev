import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-dashboard-tab',
  templateUrl: './dashboard-tab.page.html',
  styleUrls: ['./dashboard-tab.page.scss'],
})
export class DashboardTabPage implements OnInit {

   constructor() {
   }

  ngOnInit() {
  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 2.5,
    loop:true,
    autoplay:true
   };
   slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 1,
    loop:true,
    autoplay:true
   };
}
