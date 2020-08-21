import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cutshort-assignment';
  headerText: string = "Dashboard";

  statCards = [
    {
      header: "REALTIME USERS",
      count: "56",
      changeRate: 9.8,
      graphColor: "#e7effa",
      borderColor: "#1764d8"
    },
    {
      header: "TOTAL VISITS",
      count: "54,598",
      changeRate: -11.9,
      graphColor: "#eaf6ec",
      borderColor: "#34ab43"
    },
    {
      header: "BOUNCE RATE",
      count: "73.67%",
      changeRate: 12.2,
      graphColor: "#efeefe",
      borderColor: "#6859f4"
    },
    {
      header: "VISIT DURATION",
      count: "1m 4s",
      changeRate: 19.6,
      graphColor: "#fefaee",
      borderColor: "#f9cf56"
    }
  ];

  mostViewedHeaders = [{
    "name": "PAGE NAME",
    "type": "text",
    "value": "pageName"
  },
  {
    "name": " ",
    "type": "image",
    "value": "image"
  },
  {
    "name": "VISITORS",
    "type": "text",
    "value": "visitors"
  },
  {
    "name": "UNIQUE PAGE VISITS",
    "type": "text",
    "value": "uniqueVisits"
  },
  {
    "name": "BOUNCE RATE",
    "type": "text",
    "value": "bounceRate"
  },
  {
    "name": " ",
    "type": "graph",
    "value": "graph"
  }];

  mostViewedData = [
    {
      "pageName": "/store/", 
      "image": "../../assets/link-icon.svg",
      "visitors": "4,890",
      "uniqueVisits": "3,985",
      "bounceRate": "81.56%"
    },
    {
      "pageName": "/store/symbols-styleguide", 
      "image": "../../assets/link-icon.svg",
      "visitors": "3,785",
      "uniqueVisits": "3,182",
      "bounceRate": "62.56%"
    },
    {
      "pageName": "/store/dashboard-ui-kit", 
      "image": "../../assets/link-icon.svg",
      "visitors": "2,985",
      "uniqueVisits": "2,115",
      "bounceRate": "58.76%"
    },
    {
      "pageName": "/store/webflow-cards.html", 
      "image": "../../assets/link-icon.svg",
      "visitors": "2,440",
      "uniqueVisits": "1,789",
      "bounceRate": "39,59%"
    }
  ];


  socialHeaders = [{
    "name": "NETWORK",
    "type": "text",
    "value": "network"
  },
  {
    "name": "VISITORS",
    "type": "text",
    "value": "visitors"
  },
  {
    "name": " ",
    "type": "progress",
    "value": "progress"
  }];

  socialData = [
    {
      "network": "Instagram", 
      "visitors": "3,550",
      "value": "3550"
    },
    {
      "network": "Facebook", 
      "visitors": "2,236",
      "value": "2236"
    },
    {
      "network": "Twitter", 
      "visitors": "1,795",
      "value": "1795"
    },
    {
      "network": "Linkedin", 
      "visitors": "62",
      "value": "620"
    },
  ];
}
