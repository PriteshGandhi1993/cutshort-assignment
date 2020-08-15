import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../types/Menu';

@Component({
  selector: 'app-accordian-menu',
  templateUrl: './accordian-menu.component.html',
  styleUrls: ['./accordian-menu.component.scss']
})
export class AccordianMenuComponent implements OnInit {
  @Input() options;
  @Input() menus: Menu[];

  prevIndex: number;
  
  constructor() { }

  ngOnInit() {
  }

  toggle(index: number) {
    this.menus[index].active = !this.menus[index].active;
  }

  subMenuClicked(menuIndex: number, subMenuIndex:number) {
    console.log("clicked: ",menuIndex,subMenuIndex);
    console.log("this.menu: ",this.menus[menuIndex].submenu);
    console.log("prev index: ",this.prevIndex);
    if(this.prevIndex != undefined) {
      this.menus[menuIndex].submenu[this.prevIndex].active = false;
    }
    this.menus[menuIndex].submenu[subMenuIndex].active = true;
    this.prevIndex = subMenuIndex;
  }
}
