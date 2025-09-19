import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {

  totalIncome = 0;
  cardDetails =[
    {
      title:"Total Income",
      amount:500
    },
      {
      title:"Dieasl",
      amount:6000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
