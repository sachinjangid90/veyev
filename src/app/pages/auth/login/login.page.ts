import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signUp = false;
  borderOne = false;
  borderTwo = true;
  red = false;
  transparent = true;
  signLoginForm = true;
  constructor(private _location: Location) {}

  ngOnInit() {
  }

  SignUpBtn(){
    this.signUp = true;
    this.red = true;
    this.transparent = false;
  }
  LoginBtn(){
    this.signUp = false;
    this.red = false;
    this.transparent = true;
  }
  password(){
    this.signLoginForm = false;
  }
  goToBack(){
    this._location.back();
  }
} 
