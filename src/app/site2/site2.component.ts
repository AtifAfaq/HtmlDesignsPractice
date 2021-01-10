import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site2',
  templateUrl: './site2.component.html',
  styleUrls: ['./site2.component.scss']
})
export class Site2Component implements OnInit {
  carol = true;
  arrayStart = 0;
  arrayEnd = 10;
  activeIndex;
  cardArray = [{
    image: '/assets/site2/source.png',
    title: 'One Day Delivery In Gujranwala',
    subTitle: 'DARAZ MALL',
    subtitleSay: 'Flagship store',
    product: [
      { img: '/assets/site2/wirelessUsb.jpg', price: '101,000' },
      { img: '/assets/site2/handsfree.jpg', price: '101,000' },
      { img: '/assets/site2/bluetooth.jpg', price: '101,000' }
    ]
  },
  {
    image: '/assets/site2/source.png',
    title: 'One Day Delivery In Gujranwala',
    subTitle: 'DARAZ MALL',
    subtitleSay: 'Flagship store',
    product: [
      { img: '/assets/site2/wirelessUsb.jpg', price: '101,000' },
      { img: '/assets/site2/handsfree.jpg', price: '101,000' },
      { img: '/assets/site2/bluetooth.jpg', price: '101,000' }
    ]
  }
  ];
  iconArray = [
    {
      icon: 'fa fa-balance-scale',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-bath',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-automobile',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-bicycle',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-birthday-cake',
      title: 'Picks for You'
    }
    ,
    {
      icon: 'fa fa-briefcase',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-desktop',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-envelope-open',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-fighter-jet',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-group',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-glass',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-globe',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-gift',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-gears',
      title: 'Picks for You'
    },
    {
      icon: 'fa fa-heartbeat',
      title: 'Picks for You'
    }
    ,
    {
      icon: 'fa fa-home',
      title: 'Picks for You'
    }
  ];

  headerArray = [
    {
      icon: 'fa fa-bank',
      title: 'dMall'
    },
    {
      icon: 'fa fa-mortar-board',
      title: 'dUniv'
    },
    {
      icon: 'fa fa-plane',
      title: 'dTravel'
    },
    {
      icon: 'fa fa-bicycle',
      title: ' Visa'
    },
    {
      icon: 'fa fa-archive',
      title: 'Box'
    }];
  constructor() {
  }

  ngOnInit(): void {
  }
  pushNextTen(): void {
    if (this.arrayEnd < this.iconArray.length) {
      this.arrayStart = this.arrayEnd;
      this.arrayEnd = this.arrayEnd + 10;
    }
  }

  removePreviousTen(): void {
    if (this.arrayStart >= 10) {
      this.arrayStart = this.arrayStart - 10;
      this.arrayEnd = this.arrayEnd - 10;
    }
  }

  active(index) {
    this.activeIndex = index;
  }
}

