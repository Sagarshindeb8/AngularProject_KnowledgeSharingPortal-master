import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
public username : string = '';
public password : string = '';
public isLoginSuccessful = false;
  constructor() { }

  ngOnInit() {
  }

  login(x:string,y:string) {
    if(this.username === 'admin' && this.password === 'admin') {
      this.isLoginSuccessful = true ;
    }
    else {
      this.isLoginSuccessful = false;
    }
  }

}
