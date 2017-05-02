import {Component} from '@angular/core';


@Component({
  selector: 'landing',
  templateUrl: "./landing.html"
})
export class LandingComponent {

  dateSelected:string;

  constructor() {
    this.dateSelected= new Date().toISOString();
  }

  ngOnInit() {


  }


}
