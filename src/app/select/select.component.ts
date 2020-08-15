import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../types/Menu';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input('options') options;
  @Input('displayIcons') displayIcons: boolean;
  @Input('default') default: string;
  @Output('change') change: EventEmitter<string> = new EventEmitter<string>();  ;

  selectedValue : string;
  constructor() { }

  ngOnInit() {
    this.selectedValue = this.options[0].value;
    console.log("displayIcons: ",this.selectedValue);
  }

  valueChanged(event) {
    console.log("event: ",event.target.value);
    this.change.emit(event.target.value);
  }
}
