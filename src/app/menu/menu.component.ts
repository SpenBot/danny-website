import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isMobile = false;

  lunchMenuItems: {label: String, img: String, desc: String}[] = [
    {
      label: 'Fish Tacos',
      img: 'assets/images/danny-10.png',
      desc: 'Talapia with soft tacos and home made salasa.'
    },
    {
      label: 'Salmon',
      img: 'assets/images/danny-10.png',
      desc: 'Salmon with a potato and brocolli with tartar sauce.'
    },
    {
      label: 'Calamari',
      img: 'assets/images/danny-10.png',
      desc: 'Fresh calamari made to order just for you.'
    },
  ];

  dinnerMenuItems: {label: String, img: String, desc: String}[] = [
    {
      label: 'Crab Bucket',
      img: 'assets/images/danny-10.png',
      desc: 'Bucket of steamed crabs with home made butter sauce.'
    },
    {
      label: 'Large Crab Bucket',
      img: 'assets/images/danny-10.png',
      desc: 'Large bucket of steamed crabs with home made butter sauce.'
    },
    {
      label: 'Family Combo',
      img: 'assets/images/danny-10.png',
      desc: 'Famliy combo of stuff'
    },
    {
      label: 'Seafood Platter',
      img: 'assets/images/danny-10.png',
      desc: 'Platter of seafood.'
    },
  ];

  drinkMenuItems: {label: String, img: String, desc: String}[] = [
    {
      label: 'Samuel Adams',
      img: null,
      desc: null
    },
    {
      label: 'Bud Light',
      img: null,
      desc: null
    },
    {
      label: 'Stella Artois',
      img: null,
      desc: null
    },
    {
      label: 'Blue Moon',
      img: null,
      desc: null
    },
    {
      label: 'Miller Light',
      img: null,
      desc: null
    },
  ];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.isMobile = this.appService.isMobile;
  }

}
