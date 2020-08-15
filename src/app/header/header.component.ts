import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../types/Menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('headerText') headerText: string;

  dropDownOptions: Menu[] = [
    {
      name: "ENG", 
      icon: {
        "image": "../../assets/uk.svg"
      },
      value: "eng"
    },
    {
      name: "POR", 
      icon: {
        "image": "../../assets/portugal.svg"
      },
      value: "por"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
