import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-most-visited-page',
  templateUrl: './most-visited-page.component.html',
  styleUrls: ['./most-visited-page.component.scss']
})
export class MostVisitedPageComponent implements OnInit {
  @Input('headers') headers;
  @Input('data') data;
  @Input('showGraph') showGraph: boolean;
  @Input('showProgress') showProgress: boolean;
  @Input('title') title: string;
  
  rangeOfNumbers= {
    max: 10,
    min: 1
  };

  constructor() { }

  ngOnInit() {
  }

}
