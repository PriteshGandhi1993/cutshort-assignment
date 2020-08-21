import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stat-cards',
  templateUrl: './stat-cards.component.html',
  styleUrls: ['./stat-cards.component.scss']
})
export class StatCardsComponent implements OnInit {
  @Input('header') header: string;
  @Input('count') count: string;
  @Input('changeRate') changeRate: number;
  @Input('graphColor') graphColor: string;
  @Input('borderColor') borderColor: string;
  
  rangeOfNumbers= {
    max: 10,
    min: 1
  };

  randomGraphColor;
  constructor() { }

  ngOnInit() {
    this.randomGraphColor = this.graphColor;
    console.log("header: ",this.header);
    console.log("count: ",this.count);
    console.log("change rate: ",this.changeRate);
    console.log("graph color: ",this.randomGraphColor);
  }

  generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
