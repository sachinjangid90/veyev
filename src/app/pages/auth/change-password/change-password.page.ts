import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(private _location:Location) { }

  ngOnInit() {
  }
  goToBack(){
    this._location.back();
  }
}
