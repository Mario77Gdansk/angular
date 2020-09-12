import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {

  myName: string = 'My name is Mariusz'
  basicArray: string[] = ['one','two','three']
  isVisible: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.isVisible = !this.isVisible
    console.log(this.isVisible)
   // alert('Siema użytkowniku')
  }

}
