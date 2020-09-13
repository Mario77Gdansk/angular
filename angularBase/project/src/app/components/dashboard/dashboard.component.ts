import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })
  
  export class DashboardComponent implements OnInit {
    isVisible:boolean = false; //to ustawiam na wstępie
    constructor() { }
  
    ngOnInit(): void {
    }
  
      onButtonClick() {
      this.isVisible = !this.isVisible // ty zmieniam powyższego false
     }
  }
  