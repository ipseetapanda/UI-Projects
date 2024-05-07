import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  homeTitle:string = "Home Page";
  text:string ="There is no end of learning....Keep learning";
  // cardTitle:string = "Bottle Art"

  cardTitle:any = [
    {"id":1,"title":"Bottle Art"},
    {"id":2,"title":"Lippan Art" }
  ]

}
