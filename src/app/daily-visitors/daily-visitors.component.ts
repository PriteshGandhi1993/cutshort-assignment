import { Component, OnInit } from '@angular/core';
import { Menu } from '../types/Menu';

@Component({
  selector: 'app-daily-visitors',
  templateUrl: './daily-visitors.component.html',
  styleUrls: ['./daily-visitors.component.scss']
})
export class DailyVisitorsComponent implements OnInit {

  rangeOfNumbers = {
    max: 10000,
    min: 2000
  };

  type= "bar";
  selectedMonth = "January";
  selectedYear = "2018";

  months: Menu[] = [
    {
      name: "January",
      value: "jan"
    },
    {
      name: "February",
      value: "feb"
    },
    {
      name: "March",
      value: "mar"
    },
    {
      name: "April",
      value: "apr"
    },
    {
      name: "May",
      value: "may"
    },
    {
      name: "June",
      value: "jun"
    },
    {
      name: "July",
      value: "jul"
    },
    {
      name: "August",
      value: "aug"
    },
    {
      name: "September",
      value: "sept"
    },
    {
      name: "October",
      value: "oct"
    },
    {
      name: "November",
      value: "nov"
    },
    {
      name: "December",
      value: "dec"
    }
    
  ];

  years: Menu[] = [
    {
      name: "2018",
      value: "2018"
    },
    {
      name: "2019",
      value: "2019"
    },
    {
      name: "2020",
      value: "2020"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  monthChange(e) {
    this.selectedMonth = e;
  }
  
  yearChange(e) {
    this.selectedYear = e;
  }

  getLabel() {
    return this.months[0].name + " " + this.years[0].name
  }
  // getLabel() {
  //   let m = this.months.filter((element)=>{
  //     return element.value === this.selectedMonth;
  //   });
  //   let y = this.years.filter((element)=> {
  //     return element.value === this.selectedYear;
  //   });

  //   console.log("m: ",m, " y: ",y);
  //   if(!m || !m[0]) {
  //     m[0] = this.months[0];
  //   }

  //   if(!y || !y[0]) {
  //     y[0] = this.years[0];
  //   }
  //   return m[0].name + " " + y[0].name
  // }
}
