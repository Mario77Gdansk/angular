import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
 
  isOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick() {
    this.isOpen = !this.isOpen // ty zmieniam powyższego false
   }

}
