import { Component, Input, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  public isMobile = false;

  @Input() menuItem: {label: String, img: String, desc: String};

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.isMobile = this.appService.isMobile;
  }

}
