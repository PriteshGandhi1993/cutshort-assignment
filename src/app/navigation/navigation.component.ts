import { Component, OnInit } from '@angular/core';
import { Menu } from '../types/Menu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  accordianMenus: Menu[] = [
    { 
      name: 'Dashboard',
      icon: { 
        "selected": '../../assets/dashboard.svg',
        "unselected": "../../assets/dashboard-unselected.svg"
      },
      active: true,
      submenu: [
        { name: 'Page Visitors', url: '#', active: false },
        { name: 'Post Performance', url: '#', active: false },
        { name: 'Team Overall', url: '#', active: false }
      ]
    }
  ];

  navMenu: Menu[] = [
    { 
      name: 'Calendar',
      icon: {
        "selected": '../../assets/calendar.svg',
        "unselected": "../../assets/calendar.svg"
      },
      active: false,
      submenu: null
    },
    { 
      name: 'Inbox',
      icon: {
        "selected": '../../assets/inbox.svg',
        "unselected": "../../assets/inbox.svg"
      },
      active: false,
      submenu: null
    },
    { 
      name: 'Invoicing',
      icon: {
        "selected": '../../assets/receipt.svg',
        "unselected": "../../assets/receipt.svg"
      },
      active: false,
      submenu: null
    },
    { 
      name: 'Lab / Experimental',
      icon: {
        "selected": '../../assets/lab.svg',
        "unselected": "../../assets/lab.svg"
      },
      active: false,
      submenu: null
    }
  ];

  recentlyView: Menu[] = [
    { 
      name: 'Overall Performance',
      icon: null,
      active: false,
      submenu: null
    },
    { 
      name: 'Invoice #940',
      icon: null,
      active: false,
      submenu: null
    },
    { 
      name: 'Customer: Minerva Viewer',
      icon: null,
      active: false,
      submenu: null
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
