import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  username: string;  
  password: string
  constructor() { }

  ngOnInit() {
  }

  addAccount(): void { 
    const username =  this.username;
    const password = this.password
  }

}
